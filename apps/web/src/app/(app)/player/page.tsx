"use client";
import { Card } from "@/components/ui/card";
import { LogDialog } from "@/components/log-dialog";

const todayTasks = [
  { eventId: "evt_1", title: "Putting 3m drill", schema: "numeric_success" as const },
  { eventId: "evt_2", title: "Approach wedge", schema: "numeric_score" as const },
  { eventId: "evt_3", title: "Reflection", schema: "text_reflection" as const },
];

export default function PlayerToday() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Today</h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {todayTasks.map((t) => (
          <Card key={t.eventId} className="p-4">
            <div className="mb-2 font-medium">{t.title}</div>
            <LogDialog eventId={t.eventId} schema={t.schema} />
          </Card>
        ))}
      </div>
    </div>
  );
}
