import { Suspense } from "react";
import { DraggableTaskList } from "@/components/draggable-task-list";
import { PlayerCalendar } from "@/components/calendar";

async function getTemplates() {
  const url = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/task-templates`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load templates');
  return res.json();
}

export default async function PlayerCalendarPage({ params }: { params: { playerId: string } }) {
  const templates = await getTemplates();
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <DraggableTaskList templates={templates} />
      </div>
      <div className="lg:col-span-9">
        <Suspense fallback={<div>Loading calendar…</div>}>
          <PlayerCalendar playerId={params.playerId} />
        </Suspense>
      </div>
    </div>
  );
}
