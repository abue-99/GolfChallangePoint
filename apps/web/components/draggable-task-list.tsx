'use client';

import { useEffect, useRef } from 'react';
import { Draggable } from '@fullcalendar/interaction';
import { Card } from '@/components/ui/card';

export type TaskTemplate = {
  id: string;
  title: string;
  category: string;
};

export function DraggableTaskList({ templates }: { templates: TaskTemplate[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      new Draggable(ref.current, {
        itemSelector: '[data-draggable]',
        eventData: (el) => ({
          title: el.getAttribute('data-title')!,
          extendedProps: {
            templateId: el.getAttribute('data-id')!,
          },
        }),
      });
    }
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      {templates.map((t) => (
        <Card
          key={t.id}
          data-draggable
          data-id={t.id}
          data-title={t.title}
          className="p-2 cursor-move"
        >
          <div className="font-bold">{t.title}</div>
          <div className="text-sm text-gray-500">{t.category}</div>
        </Card>
      ))}
    </div>
  );
}