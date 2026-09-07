"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { StandaloneAssignment } from "@/types/standalone-assignment";
import { FOCUS_AREA_EMOJI } from "@/lib/lesson-types";
import { cn } from "@/lib/utils";
import {
  CalendarPlus,
  ClipboardList,
  Clock,
  Inbox,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  LIFECYCLE_META,
  normalizeLifecycleStatus,
} from "@/lib/assignment-lifecycle";

function QueueItem({
  assignment,
  onStatusChange,
}: {
  assignment: StandaloneAssignment;
  onStatusChange: (
    id: string,
    status: string,
    options?: { ensureInQueue?: boolean },
  ) => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const isTeam =
    assignment.sourceType === "TEAM" ||
    assignment.targetType === "TEAM" ||
    Boolean(assignment.teamId);
  const lifecycle = normalizeLifecycleStatus(assignment.status);
  const contextLabel = assignment.journeyTemplate ? "PART OF JOURNEY" : "SINGLE LESSON";
  const scheduleLabel = assignment.calendarTask?.scheduledDate || assignment.dueDate;

  async function act(status: string, options?: { ensureInQueue?: boolean }) {
    setBusy(true);
    try {
      await onStatusChange(assignment.id, status, options);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex items-start gap-3 rounded-lg border bg-card p-3 shadow-sm">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p
            className={cn(
              "font-medium text-sm",
              lifecycle === "COMPLETED" && "line-through text-muted-foreground",
            )}
          >
            {assignment.lesson?.name ?? "—"}
          </p>
          <Badge
            variant="outline"
            className={cn(
              "text-[10px] px-1.5 py-0 shrink-0",
              isTeam
                ? "border-green-500 text-green-700 dark:text-green-400"
                : "border-blue-500 text-blue-700 dark:text-blue-400",
            )}
          >
            {isTeam ? "TEAM" : "PERSONAL"}
          </Badge>
          <Badge
            variant="outline"
            className="border-blue-500 px-1.5 py-0 text-[10px] text-blue-700 dark:text-blue-400"
          >
            Lesson
          </Badge>
          <Badge
            variant="outline"
            className="px-1.5 py-0 text-[10px]"
            style={{
              borderColor: LIFECYCLE_META[lifecycle].color,
              color: LIFECYCLE_META[lifecycle].color,
            }}
          >
            {LIFECYCLE_META[lifecycle].label}
          </Badge>
        </div>

        <div className="flex items-center gap-3 mt-0.5 flex-wrap">
          {assignment.lesson?.focusArea && (
            <span className="text-xs text-muted-foreground">
              {FOCUS_AREA_EMOJI[assignment.lesson.focusArea] ?? ""}{" "}
              {assignment.lesson.focusArea.replace(/_/g, " ")}
            </span>
          )}
          {assignment.lesson?.durationMinutes && (
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {assignment.lesson.durationMinutes}m
            </span>
          )}
          {assignment.journeyTemplate?.name && (
            <span className="text-xs text-muted-foreground">
              {contextLabel}: {assignment.journeyTemplate.name}
            </span>
          )}
        </div>

        <div className="mt-2 space-y-1 text-xs text-muted-foreground">
          <div>{isTeam ? "TEAM" : "PERSONAL"}</div>
          <div>{contextLabel}</div>
          <div>
            {scheduleLabel
              ? `Scheduled: ${new Date(scheduleLabel).toLocaleString()}`
              : "Unscheduled"}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2">
        {lifecycle !== "COMPLETED" ? (
          <Button variant="ghost" size="icon" className="h-7 w-7" asChild title="Schedule">
          <a href="/calendar">
            <CalendarPlus className="h-4 w-4" />
          </a>
          </Button>
        ) : null}
        {lifecycle === "ACCEPTED" ? (
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs"
            disabled={busy}
            onClick={() => act("IN_PROGRESS")}
          >
            Start
          </Button>
        ) : lifecycle === "ACTIVE" ? (
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs"
            disabled={busy}
            onClick={() => act("COMPLETED")}
          >
            Complete
          </Button>
        ) : lifecycle === "COMPLETED" ? (
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs"
            disabled={busy}
            onClick={() => act("OPEN", { ensureInQueue: true })}
          >
            Reopen
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default function TrainingQueuePage() {
  const [assignments, setAssignments] = useState<StandaloneAssignment[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"active" | "completed">("active");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.listMyStandaloneAssignments({ queueOnly: true });
      setAssignments(Array.isArray(data) ? (data as StandaloneAssignment[]) : []);
    } catch {
      setAssignments([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleStatusChange = useCallback(
    async (
      id: string,
      status: string,
      options?: { ensureInQueue?: boolean },
    ) => {
      try {
        await api.updateStandaloneAssignment(id, {
          status,
          ...(options?.ensureInQueue ? { isInTrainingQueue: true } : {}),
        });
        toast.success(
          status === "IN_PROGRESS"
            ? "Lesson started."
            : status === "COMPLETED"
              ? "Marked as completed."
              : "Lesson moved back to accepted.",
        );
        load();
      } catch {
        toast.error("Failed to update status.");
      }
    },
    [load],
  );

  const visible = (assignments ?? []).filter((a) => {
    const lifecycle = normalizeLifecycleStatus(a.status);
    if (filter === "completed") return lifecycle === "COMPLETED";
    return lifecycle !== "COMPLETED";
  });

  return (
    <section className="space-y-4 max-w-2xl">
      {/* Header */}
      <header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary" />
            My Training Queue
          </h1>
          <p className="text-sm text-muted-foreground">
            Your personal training backlog — practice at your own pace.
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href="/calendar">
            <CalendarPlus className="h-4 w-4 mr-1.5" />
            Schedule a session
          </a>
        </Button>
      </header>

      {/* Filter tabs */}
      <div className="flex gap-1 border-b pb-0">
        {(["active", "completed"] as const).map((f) => (
          <button
            key={f}
            type="button"
            className={cn(
              "px-3 py-1.5 text-sm font-medium border-b-2 -mb-px transition-colors",
              filter === f
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setFilter(f)}
          >
            {f === "active" ? "Active" : "Completed"}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading queue…</p>
      ) : visible.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-12 text-center text-muted-foreground">
          <Inbox className="h-8 w-8 opacity-30" />
          <p className="text-sm">
            {filter === "completed"
              ? "No completed lessons yet."
              : "Your queue is empty. Your coach will assign lessons here."}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {visible.map((a) => (
            <QueueItem
              key={a.id}
              assignment={a}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}
    </section>
  );
}
