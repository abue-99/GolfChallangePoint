"use client";

import {
  createLifecycleCounts,
  LIFECYCLE_META,
  LIFECYCLE_ORDER,
  sumLifecycleCounts,
  type LifecycleCounts,
} from "@/lib/assignment-lifecycle";
import { cn } from "@/lib/utils";

export type LearningProgressSummary = {
  lessons?: Partial<LifecycleCounts> | null;
  journeys?: Partial<LifecycleCounts> | null;
};

function normalizeCounts(counts?: Partial<LifecycleCounts> | null): LifecycleCounts {
  return {
    ...createLifecycleCounts(),
    ...counts,
  };
}

export function hasOpenLifecycleItems(counts?: Partial<LifecycleCounts> | null) {
  const normalized = normalizeCounts(counts);
  return normalized.PENDING + normalized.ACCEPTED + normalized.ACTIVE > 0;
}

export function hasAnyLearningProgress(progress?: LearningProgressSummary | null) {
  return (
    sumLifecycleCounts(progress?.lessons) > 0 ||
    sumLifecycleCounts(progress?.journeys) > 0
  );
}

export function CompactLifecycleLine({
  label,
  counts,
  className,
}: {
  label: string;
  counts?: Partial<LifecycleCounts> | null;
  className?: string;
}) {
  const normalized = normalizeCounts(counts);

  return (
    <div className={cn("flex items-center justify-between gap-2 text-[11px]", className)}>
      <span className="font-medium text-slate-500">{label}</span>
      <span className="flex items-center gap-2 whitespace-nowrap text-slate-700">
        {LIFECYCLE_ORDER.map((status) => (
          <span key={status}>
            {LIFECYCLE_META[status].emoji}
            {normalized[status]}
          </span>
        ))}
      </span>
    </div>
  );
}

export function LifecycleBar({
  title,
  counts,
}: {
  title: string;
  counts?: Partial<LifecycleCounts> | null;
}) {
  const normalized = normalizeCounts(counts);
  const total = sumLifecycleCounts(normalized);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-slate-800">{title}</span>
        <div className="flex items-center gap-3 whitespace-nowrap text-xs text-slate-600">
          {LIFECYCLE_ORDER.map((status) => (
            <span key={status}>
              {LIFECYCLE_META[status].emoji}
              {normalized[status]}
            </span>
          ))}
        </div>
      </div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        {LIFECYCLE_ORDER.map((status) => {
          const value = normalized[status];
          const width = total > 0 ? `${(value / total) * 100}%` : "0%";
          return (
            <div
              key={status}
              className={cn("h-full", value > 0 ? "" : "hidden", LIFECYCLE_META[status].bgClass)}
              style={{ width }}
              title={`${LIFECYCLE_META[status].label}: ${value}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export function LearningProgressSection({
  progress,
  compact = false,
}: {
  progress?: LearningProgressSummary | null;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="w-full space-y-1">
        <CompactLifecycleLine label="Journeys" counts={progress?.journeys} />
        <CompactLifecycleLine label="Lessons" counts={progress?.lessons} />
      </div>
    );
  }

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div>
        <p className="text-sm font-semibold text-slate-800">Learning Progress</p>
      </div>
      <LifecycleBar title="Journeys" counts={progress?.journeys} />
      <LifecycleBar title="Lessons" counts={progress?.lessons} />
    </div>
  );
}
