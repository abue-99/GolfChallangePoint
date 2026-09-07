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
  recentCompletions?: {
    lessons?: number | null;
    journeys?: number | null;
  } | null;
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

function getCompactCounts(
  counts?: Partial<LifecycleCounts> | null,
  recentCompletedCount?: number | null,
): LifecycleCounts {
  const normalized = normalizeCounts(counts);
  return {
    ...normalized,
    COMPLETED: Math.max(
      0,
      Math.min(normalized.COMPLETED, Number(recentCompletedCount ?? 0)),
    ),
  };
}

function getVisibleSegments(counts: LifecycleCounts) {
  return LIFECYCLE_ORDER.filter((status) => counts[status] > 0);
}

export function hasVisibleLifecycleItems(
  counts?: Partial<LifecycleCounts> | null,
  recentCompletedCount?: number | null,
) {
  return getVisibleSegments(
    getCompactCounts(counts, recentCompletedCount),
  ).length > 0;
}

export function hasAnyLearningProgress(progress?: LearningProgressSummary | null) {
  return (
    sumLifecycleCounts(progress?.lessons) > 0 ||
    sumLifecycleCounts(progress?.journeys) > 0
  );
}

export function hasVisibleLearningProgress(
  progress?: LearningProgressSummary | null,
) {
  return (
    hasVisibleLifecycleItems(
      progress?.journeys,
      progress?.recentCompletions?.journeys,
    ) ||
    hasVisibleLifecycleItems(
      progress?.lessons,
      progress?.recentCompletions?.lessons,
    )
  );
}

function CompactLearningSummaryRow({
  label,
  counts,
  className,
}: {
  label: "Journeys" | "Lessons";
  counts: LifecycleCounts;
  className?: string;
}) {
  const visibleSegments = getVisibleSegments(counts);
  if (visibleSegments.length === 0) return null;

  return (
    <div
      className={cn("flex items-center gap-2 text-xs text-slate-700", className)}
      aria-label={`${label} summary`}
    >
      <span className="w-14 shrink-0 text-left text-[8px] font-semibold uppercase tracking-[0.08em] text-slate-500">
        {label}
      </span>
      <div className="grid h-2 w-full grid-cols-4 gap-1">
        {visibleSegments.map((status) => (
          <div
            key={status}
            className="h-full rounded-full"
            style={{ backgroundColor: LIFECYCLE_META[status].color }}
            title={`${LIFECYCLE_META[status].label}: ${counts[status]}`}
          >
            <span className="sr-only">
              {`${label} ${LIFECYCLE_META[status].label}: ${counts[status]}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompactLearningSummary({
  progress,
  className,
}: {
  progress?: LearningProgressSummary | null;
  className?: string;
}) {
  const journeyCounts = getCompactCounts(
    progress?.journeys,
    progress?.recentCompletions?.journeys,
  );
  const lessonCounts = getCompactCounts(
    progress?.lessons,
    progress?.recentCompletions?.lessons,
  );

  return (
    <div className={cn("w-full space-y-1", className)}>
      <CompactLearningSummaryRow label="Journeys" counts={journeyCounts} />
      <CompactLearningSummaryRow label="Lessons" counts={lessonCounts} />
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

  return (
    <div className="space-y-1.5">
      <span className="text-sm font-semibold text-slate-800">{title}</span>
      <div className="grid h-2.5 w-full grid-cols-4 gap-1">
        {LIFECYCLE_ORDER.map((status) => {
          const value = normalized[status];
          return (
            <div
              key={status}
              className={cn(
                "h-full rounded-full",
                value > 0 ? LIFECYCLE_META[status].bgClass : "bg-slate-200",
              )}
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
    return <CompactLearningSummary progress={progress} />;
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
