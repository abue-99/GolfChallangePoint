"use client";

import type { CSSProperties } from "react";
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
  prefix,
  counts,
  className,
}: {
  prefix: "J" | "L";
  counts: LifecycleCounts;
  className?: string;
}) {
  const visibleSegments = getVisibleSegments(counts);
  const rowLabel = prefix === "J" ? "Journeys" : "Lessons";
  if (visibleSegments.length === 0) return null;

  const badgeStyles: Record<(typeof visibleSegments)[number], CSSProperties> = {
    PENDING: {
      background: "linear-gradient(rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)), #F97316",
    },
    ACCEPTED: {
      background: "linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), #CA8A04",
    },
    ACTIVE: {
      background: "linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), #84CC16",
    },
    COMPLETED: {
      background: "linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), #16A34A",
    },
  };
  const badgeIcons: Record<(typeof visibleSegments)[number], string> = {
    PENDING: "P",
    ACCEPTED: "A",
    ACTIVE: "▶",
    COMPLETED: "✓",
  };

  return (
    <div
      className={cn("flex items-center gap-2 text-xs text-slate-700", className)}
      aria-label={`${rowLabel} summary`}
    >
      <span className="w-3 shrink-0 text-[11px] font-semibold text-slate-500">{prefix}</span>
      <div className="flex flex-wrap items-center gap-1.5">
        {visibleSegments.map((status) => (
          <span
            key={status}
            className="inline-flex h-[18px] w-9 shrink-0 items-center justify-center rounded-md px-2 text-[11px] font-bold text-white"
            style={{
              ...badgeStyles[status],
              textShadow: "0 1px 1px rgba(0, 0, 0, 0.18)",
            }}
            title={`${LIFECYCLE_META[status].label}: ${counts[status]}`}
          >
            <span className="sr-only">
              {`${rowLabel} ${LIFECYCLE_META[status].label}: ${counts[status]}`}
            </span>
            <span aria-hidden="true" className="mr-0.5 text-[10px] leading-none">
              {badgeIcons[status]}
            </span>
            <span aria-hidden="true" className="tabular-nums">
              {counts[status]}
            </span>
          </span>
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
      <CompactLearningSummaryRow prefix="J" counts={journeyCounts} />
      <CompactLearningSummaryRow prefix="L" counts={lessonCounts} />
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
