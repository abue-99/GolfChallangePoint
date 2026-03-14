'use client';
import { useEffect, useMemo, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

// FullCalendar styles (v6)
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
// import '@fullcalendar/list/main.css'; // optional

import { api } from '@/lib/api';
import type { CalendarEvent } from '@/lib/types';

export function PlayerCalendar({ playerId }: { playerId: string }) {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const data: CalendarEvent[] = await api.listEvents(playerId);
        if (!ignore) {
          setEvents(
            data.map((e) => ({
              id: e.id,
              title: e.template?.title ?? 'Task',
              start: e.start,
              end: e.end,
              extendedProps: { templateId: e.templateId },
            })),
          );
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [playerId]);

  const handleReceive = async (info: any) => {
    try {
      const templateId = info.event.extendedProps.templateId;
      const payload = {
        playerId,
        templateId,
        start: info.event.start?.toISOString(),
        end: info.event.end?.toISOString() ?? info.event.start?.toISOString(),
      };
      const created = await api.createEvent(payload);
      info.event.setProp('id', created.id);
    } catch (e) {
      console.error(e);
      info.revert();
    }
  };

  const handleDropOrResize = async (info: any) => {
    try {
      const id = info.event.id;
      await api.updateEvent(id, {
        start: info.event.start?.toISOString(),
        end: info.event.end?.toISOString(),
      });
    } catch (e) {
      console.error(e);
      info.revert();
    }
  };

  const calendarEvents = useMemo(() => events, [events]);

  if (loading) return <div>Loading calendar…</div>;

  return (
    <FullCalendar
      plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      firstDay={1}
      droppable
      editable
      height="auto"
      events={calendarEvents}
      eventReceive={handleReceive}
      eventDrop={handleDropOrResize}
      eventResize={handleDropOrResize}
    />
  );
}
``