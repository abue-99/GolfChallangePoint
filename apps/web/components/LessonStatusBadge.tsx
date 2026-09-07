"use client";

import { cn } from "@/lib/utils";
import type { LessonStatus } from "@/lib/lesson-types";

const STATUS_MAP: Record<LessonStatus, { label: string; classes: string }> = {
  PLANNED: {
    label: "Planned",
    classes: "bg-[#FEE2E2] text-[#B91C1C] ring-[#FCA5A5]",
  },
  IN_PROGRESS: {
    label: "In Progress",
    classes: "bg-[#ECFCCB] text-[#3F6212] ring-[#84CC16]",
  },
  COMPLETED: {
    label: "Completed",
    classes: "bg-[#DCFCE7] text-[#166534] ring-[#16A34A]",
  },
};

export function LessonStatusBadge({ status }: { status: LessonStatus }) {
  const { label, classes } = STATUS_MAP[status] ?? STATUS_MAP.PLANNED;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        classes
      )}
    >
      {label}
    </span>
  );
}
