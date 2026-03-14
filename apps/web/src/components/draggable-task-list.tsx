"use client";
import { useEffect, useRef } from "react";
import { Draggable } from "@fullcalendar/interaction";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TaskTemplate } from "@/lib/types";

export function DraggableTaskList({ templates }: { templates: TaskTemplate[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      new Draggable(ref.current, {
        itemSelector: "[data-draggable]",
        eventData: (el) => {
          const id = el.getAttribute("data-id")!;
          const title = el.getAttribute("data-title")!;
          const templateId = id;
          return { title, extendedProps: { templateId } };
        },
      });
    }
  }, []);

  return (
    <Card className="p-3">
      <div className="mb-2 text-sm font-medium">Task Library</div>
      <div ref={ref} className="space-y-2">
        {templates.map((t) => (
          <div
            key={t.id}
            data-draggable
            data-id={t.id}
            data-title={t.title}
            className="cursor-grab rounded-md border bg-card p-2 text-sm hover:bg-accent"
            title="Drag into calendar"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{t.title}</span>
              <Badge variant="secondary">{t.category}</Badge>
            </div>
            <div className="text-xs text-muted-foreground">{t.inputSchema}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
