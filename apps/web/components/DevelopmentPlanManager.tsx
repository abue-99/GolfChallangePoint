"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FOCUS_AREAS,
  getFocusAreaPath,
  isCompletedAssignmentStatus,
  normalizeAssignmentStatus,
  type PlayerDevelopmentPlan,
  type TrainingBlock,
  type TrainingLesson,
  type LessonAssignment,
} from "@/lib/lesson-types";
import {
  Plus,
  ChevronDown,
  ChevronUp,
  Trash2,
  Target,
  Clock,
  Calendar,
  Pencil,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Props {
  playerId?: string;
  teamId?: string;
}

type AssignmentListItem = {
  id: string;
  itemType?: "lesson" | "journey";
  status?: string;
  sourceType?: "PLAYER" | "TEAM" | "GROUP";
  team?: { id: string; shortName: string; icon?: string | null } | null;
  journeyTemplate?: { id: string; name: string } | null;
  playerPlanId?: string | null;
  lesson?: {
    id: string;
    name: string;
    focusArea: string;
    subCapability?: string | null;
    subSubCapability?: string | null;
    durationMinutes: number;
  } | null;
  block?: {
    id: string;
    planId: string;
    plan?: {
      id: string;
      name: string;
      ownerType: "PLAYER" | "TEAM";
      team?: { id: string; shortName: string; icon?: string | null } | null;
    } | null;
  } | null;
};

const FOCUS_AREA_EMOJI: Record<string, string> = {
  SETUP: "🏌️",
  PUTTING: "⛳",
  SHORT_GAME: "🎯",
  LONG_GAME: "💪",
  TACTICAL: "🧠",
  FITNESS: "🏃",
  MENTAL: "🧘",
};

// ─── Status styles ────────────────────────────────────────────────────────────

const STATUS_BADGE: Record<string, string> = {
  NEW: "bg-[#FEE2E2] text-[#B91C1C]",
  OPEN: "bg-[#FEF9C3] text-[#A16207]",
  IN_PROGRESS: "bg-[#ECFCCB] text-[#3F6212]",
  COMPLETED: "bg-[#DCFCE7] text-[#166534]",
  ARCHIVED: "bg-amber-100 text-amber-700",
};

const STATUS_LABEL: Record<string, string> = {
  NEW: "Pending",
  OPEN: "Accepted",
  IN_PROGRESS: "Active",
  COMPLETED: "Completed",
  ARCHIVED: "Archived",
};

const STATUS_ORDER: Record<string, number> = {
  IN_PROGRESS: 0,
  OPEN: 1,
  NEW: 2,
  COMPLETED: 3,
  ARCHIVED: 4,
};

// ─── Main Component ───────────────────────────────────────────────────────────

export function DevelopmentPlanManager({ playerId, teamId }: Props) {
  const [plans, setPlans] = useState<PlayerDevelopmentPlan[]>([]);
  const [playerAssignments, setPlayerAssignments] = useState<AssignmentListItem[]>([]);
  const [lessonTemplates, setLessonTemplates] = useState<TrainingLesson[]>([]);
  const [journeyTemplates, setJourneyTemplates] = useState<Array<{ id: string; name: string; description?: string | null }>>([]);
  const [loading, setLoading] = useState(true);
  const [showNewPlan, setShowNewPlan] = useState(false);
  const [assigningLessonId, setAssigningLessonId] = useState<string | null>(null);
  const [assigningJourneyId, setAssigningJourneyId] = useState<string | null>(null);
  const [lessonFilter, setLessonFilter] = useState("ALL");
  const [journeyFilter, setJourneyFilter] = useState("ALL");
  const [lessonSearch, setLessonSearch] = useState("");
  const [journeySearch, setJourneySearch] = useState("");

  const load = useCallback(async () => {
    try {
      if (teamId) {
        const data = await api.listPlansForTeam(teamId);
        setPlans(Array.isArray(data) ? data : []);
        setPlayerAssignments([]);
        setLessonTemplates([]);
        setJourneyTemplates([]);
        return;
      }
      if (!playerId) {
        setPlans([]);
        setPlayerAssignments([]);
        setLessonTemplates([]);
        setJourneyTemplates([]);
        return;
      }
      const [plansData, assignmentsData, lessonsData, journeyTemplatesData] = await Promise.all([
        api.listPlansForPlayer(playerId),
        api.listCoachPlayerAssignments(playerId),
        api.listLessons(),
        api.listJourneyTemplates(),
      ]);
      setPlans(Array.isArray(plansData) ? plansData : []);
      setPlayerAssignments(Array.isArray(assignmentsData) ? assignmentsData : []);
      setLessonTemplates(Array.isArray(lessonsData) ? lessonsData : []);
      setJourneyTemplates(Array.isArray(journeyTemplatesData) ? journeyTemplatesData : []);
    } finally {
      setLoading(false);
    }
  }, [playerId, teamId]);

  useEffect(() => { load(); }, [load]);

  const journeyAssignmentByPlanId = useMemo(() => {
    return new Map(
      playerAssignments
        .filter((entry) => entry.itemType === "journey" && entry.playerPlanId)
        .map((entry) => [entry.playerPlanId as string, entry]),
    );
  }, [playerAssignments]);

  const journeyRows = useMemo(() => {
    return plans.map((plan) => {
      const linkedJourney = journeyAssignmentByPlanId.get(plan.id);
      const allStatuses = plan.blocks.flatMap((block) =>
        block.assignments.map((assignment) => normalizeAssignmentStatus(assignment.status)),
      );
      const derivedStatus =
        linkedJourney?.status
          ? normalizeAssignmentStatus(linkedJourney.status)
          : allStatuses.length === 0
            ? "NEW"
            : allStatuses.every((status) => status === "COMPLETED")
              ? "COMPLETED"
              : allStatuses.some((status) => status === "IN_PROGRESS")
                ? "IN_PROGRESS"
                : allStatuses.some((status) => status === "OPEN")
                  ? "OPEN"
                  : "NEW";
      const origin = plan.ownerType === "TEAM"
        ? "TEAM"
        : linkedJourney?.team?.id
          ? "TEAM"
          : linkedJourney
            ? "TEMPLATE"
            : "INDIVIDUAL";
      return {
        plan,
        status: derivedStatus,
        origin,
      };
    });
  }, [journeyAssignmentByPlanId, plans]);

  const lessonRows = useMemo(() => {
    return playerAssignments
      .filter((entry) => entry.itemType !== "journey" && entry.lesson)
      .map((entry) => {
        const normalizedStatus = normalizeAssignmentStatus(entry.status);
        const isPartOfJourney = Boolean(entry.block?.plan);
        const origin =
          entry.sourceType === "TEAM" || entry.team?.id
            ? "TEAM"
            : "INDIVIDUAL";
        return {
          ...entry,
          normalizedStatus,
          origin,
          context: isPartOfJourney ? "Part of Journey" : "Standalone Lesson",
          parentJourneyName: entry.block?.plan?.name ?? null,
        };
      });
  }, [playerAssignments]);

  const filteredLessonRows = useMemo(() => {
    const query = lessonSearch.trim().toLowerCase();
    return lessonRows
      .filter((row) => lessonFilter === "ALL" || row.normalizedStatus === lessonFilter)
      .filter((row) => {
        if (!query) return true;
        const lessonName = row.lesson?.name.toLowerCase() ?? "";
        const journeyName = row.parentJourneyName?.toLowerCase() ?? "";
        return lessonName.includes(query) || journeyName.includes(query);
      })
      .sort((a, b) => {
        const priorityDiff =
          (STATUS_ORDER[a.normalizedStatus] ?? 99) -
          (STATUS_ORDER[b.normalizedStatus] ?? 99);
        if (priorityDiff !== 0) return priorityDiff;
        return (b.lesson?.name ?? "").localeCompare(a.lesson?.name ?? "");
      });
  }, [lessonFilter, lessonRows, lessonSearch]);

  const filteredJourneyRows = useMemo(() => {
    const query = journeySearch.trim().toLowerCase();
    return journeyRows
      .filter((row) => journeyFilter === "ALL" || row.status === journeyFilter)
      .filter((row) => {
        if (!query) return true;
        return row.plan.name.toLowerCase().includes(query);
      })
      .sort((a, b) => {
        const priorityDiff =
          (STATUS_ORDER[a.status] ?? 99) - (STATUS_ORDER[b.status] ?? 99);
        if (priorityDiff !== 0) return priorityDiff;
        return b.plan.createdAt.localeCompare(a.plan.createdAt);
      });
  }, [journeyFilter, journeyRows, journeySearch]);

  const lessonSummary = useMemo(() => {
    return lessonRows.reduce(
      (acc, row) => {
        if (row.normalizedStatus === "NEW") acc.pending += 1;
        if (row.normalizedStatus === "IN_PROGRESS") acc.active += 1;
        return acc;
      },
      { pending: 0, active: 0 },
    );
  }, [lessonRows]);

  const journeySummary = useMemo(() => {
    return journeyRows.reduce(
      (acc, row) => {
        if (row.status === "NEW") acc.pending += 1;
        if (row.status === "IN_PROGRESS") acc.active += 1;
        return acc;
      },
      { pending: 0, active: 0 },
    );
  }, [journeyRows]);

  async function assignLessonTemplate(lessonId: string) {
    if (!playerId) return;
    try {
      setAssigningLessonId(lessonId);
      await api.assignLessonToPlayer(playerId, { lessonId });
      toast.success("Lesson assigned");
      await load();
    } catch {
      toast.error("Failed to assign lesson");
    } finally {
      setAssigningLessonId(null);
    }
  }

  async function assignJourneyTemplate(journeyId: string) {
    if (!playerId) return;
    try {
      setAssigningJourneyId(journeyId);
      await api.assignJourneyToPlayer(journeyId, playerId);
      toast.success("Journey assigned");
      await load();
    } catch {
      toast.error("Failed to assign journey");
    } finally {
      setAssigningJourneyId(null);
    }
  }

  async function updateLessonStatus(assignmentId: string, status: string) {
    try {
      await api.updateStandaloneAssignment(assignmentId, { status });
      toast.success("Lesson updated");
      await load();
    } catch {
      toast.error("Failed to update lesson");
    }
  }

  async function deleteLessonAssignment(assignmentId: string) {
    try {
      await api.deleteStandaloneAssignment(assignmentId);
      toast.success("Lesson deleted");
      await load();
    } catch {
      toast.error("Failed to delete lesson");
    }
  }

  if (loading) return <PlanSkeleton />;

  return (
    <div className="space-y-4">
      {playerId ? (
        <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-slate-800">Assignments</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-700">Lesson Library</h3>
              <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
                {lessonTemplates.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-800">{lesson.name}</p>
                      <p className="text-xs text-slate-500">{lesson.durationMinutes}m · {getFocusAreaPath(lesson.focusArea, lesson.subCapability, lesson.subSubCapability)}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={assigningLessonId === lesson.id}
                      onClick={() => assignLessonTemplate(lesson.id)}
                    >
                      Assign
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-700">Journey Templates</h3>
              <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
                {journeyTemplates.map((journey) => (
                  <div key={journey.id} className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-800">{journey.name}</p>
                      {journey.description ? (
                        <p className="truncate text-xs text-slate-500">{journey.description}</p>
                      ) : null}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={assigningJourneyId === journey.id}
                      onClick={() => assignJourneyTemplate(journey.id)}
                    >
                      Assign
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {playerId ? (
        <div className="space-y-3 rounded-2xl border border-gray-200 bg-white p-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-800">Lessons</h2>
            <p className="text-xs text-slate-500">
              Pending Lessons: {lessonSummary.pending} · Active Lessons: {lessonSummary.active}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={lessonSearch}
              onChange={(event) => setLessonSearch(event.target.value)}
              placeholder="Search lessons or journeys…"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
            <select
              value={lessonFilter}
              onChange={(event) => setLessonFilter(event.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="ALL">All</option>
              <option value="NEW">Pending</option>
              <option value="OPEN">Accepted</option>
              <option value="IN_PROGRESS">Active</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <div className="space-y-2">
            {filteredLessonRows.map((assignment) => (
              <div key={assignment.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">{assignment.lesson?.name}</p>
                    <p className="text-xs text-slate-500">
                      {assignment.origin === "TEAM" ? "Team" : "Individual"} · {assignment.context}
                    </p>
                    {assignment.parentJourneyName ? (
                      <p className="text-xs text-slate-500">Part of Journey: {assignment.parentJourneyName}</p>
                    ) : null}
                  </div>
                  <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", STATUS_BADGE[assignment.normalizedStatus] ?? "bg-slate-100 text-slate-700")}>
                    {STATUS_LABEL[assignment.normalizedStatus] ?? assignment.normalizedStatus}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <select
                    value={assignment.normalizedStatus}
                    onChange={(event) => updateLessonStatus(assignment.id, event.target.value)}
                    className="rounded-md border border-slate-200 px-2 py-1 text-xs"
                  >
                    <option value="NEW">Pending</option>
                    <option value="OPEN">Accepted</option>
                    <option value="IN_PROGRESS">Active</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                  <Button size="sm" variant="outline" onClick={() => deleteLessonAssignment(assignment.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
            {filteredLessonRows.length === 0 ? (
              <p className="text-sm text-slate-500">No lessons for the selected filters.</p>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">Journeys</h2>
        <Button
          size="sm"
          className="bg-green-600 text-white hover:bg-green-500"
          onClick={() => setShowNewPlan(true)}
        >
          <Plus className="mr-1.5 h-4 w-4" />
          Create Journey
        </Button>
      </div>

      {playerId ? (
        <div className="space-y-2 rounded-2xl border border-gray-200 bg-white p-4">
          <p className="text-xs text-slate-500">
            Pending Journeys: {journeySummary.pending} · Active Journeys: {journeySummary.active}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={journeySearch}
              onChange={(event) => setJourneySearch(event.target.value)}
              placeholder="Search journeys…"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
            />
            <select
              value={journeyFilter}
              onChange={(event) => setJourneyFilter(event.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
            >
              <option value="ALL">All</option>
              <option value="NEW">Pending</option>
              <option value="OPEN">Accepted</option>
              <option value="IN_PROGRESS">Active</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
        </div>
      ) : null}

      {showNewPlan && (
        <NewPlanForm
          playerId={playerId}
          teamId={teamId}
          onCreated={(plan) => {
            setPlans((prev) => [plan, ...prev]);
            setShowNewPlan(false);
          }}
          onCancel={() => setShowNewPlan(false)}
        />
      )}

      {plans.length === 0 && !showNewPlan ? (
        <Card className="border border-dashed">
          <CardContent className="p-8 text-center text-slate-500">
            <Target className="mx-auto mb-3 h-8 w-8 text-slate-300" />
            <p className="font-medium">No journeys yet</p>
            <p className="text-sm">{teamId ? "Create a structured training journey for this team." : "Create a structured training journey for this player."}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {(playerId ? filteredJourneyRows.map((row) => row.plan) : plans).map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              playerId={playerId}
              statusBadge={playerId ? (journeyRows.find((row) => row.plan.id === plan.id)?.status ?? "NEW") : undefined}
              originBadge={playerId ? (journeyRows.find((row) => row.plan.id === plan.id)?.origin ?? "INDIVIDUAL") : undefined}
              onDeleted={() => setPlans((prev) => prev.filter((p) => p.id !== plan.id))}
              onUpdated={(updated) => setPlans((prev) => prev.map((p) => p.id === updated.id ? updated : p))}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── New Plan Form ────────────────────────────────────────────────────────────

function NewPlanForm({
  playerId,
  teamId,
  onCreated,
  onCancel,
}: {
  playerId?: string;
  teamId?: string;
  onCreated: (plan: PlayerDevelopmentPlan) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    try {
      const payload: Record<string, unknown> = {
        name: name.trim(),
        description: description.trim() || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      };
      if (teamId) {
        payload.teamId = teamId;
      } else if (playerId) {
        payload.playerId = playerId;
      }
      const plan = await api.createPlan(payload);
      if (plan?.id) {
        onCreated(plan);
        toast.success("Journey created");
      } else {
        toast.error("Failed to create journey");
      }
    } catch {
      toast.error("Failed to create journey");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card className="border border-green-200 bg-green-50/50">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <h3 className="font-medium text-slate-800">New Journey</h3>
          <input
            autoFocus
            required
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
            placeholder="Journey name (e.g. Putting Improvement Journey)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows={2}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-slate-500">Start Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-slate-500">End Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-200"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button type="submit" size="sm" disabled={saving} className="bg-green-600 text-white hover:bg-green-500">
              {saving ? "Creating…" : "Create Journey"}
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

// ─── Edit Plan Form ───────────────────────────────────────────────────────────

function EditPlanForm({
  plan,
  onSaved,
  onCancel,
}: {
  plan: PlayerDevelopmentPlan;
  onSaved: (updated: PlayerDevelopmentPlan) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(plan.name);
  const [description, setDescription] = useState(plan.description ?? "");
  const [startDate, setStartDate] = useState(plan.startDate ? plan.startDate.slice(0, 10) : "");
  const [endDate, setEndDate] = useState(plan.endDate ? plan.endDate.slice(0, 10) : "");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    try {
      const updated = await api.updatePlan(plan.id, {
        name: name.trim(),
        description: description.trim() || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      });
      if (updated?.id) {
        onSaved(updated);
        toast.success("Journey updated");
      } else {
        toast.error("Failed to update journey");
      }
    } catch {
      toast.error("Failed to update journey");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card className="border border-amber-200 bg-amber-50/40">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <h3 className="font-medium text-slate-800">Edit Journey</h3>
          <input
            autoFocus
            required
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200"
            placeholder="Journey name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows={2}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-slate-500">Start Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-medium text-slate-500">End Date</label>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button type="submit" size="sm" disabled={saving} className="bg-amber-500 text-white hover:bg-amber-400">
              {saving ? "Saving…" : "Save Changes"}
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={onCancel}>Cancel</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

// ─── Plan Card ────────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  playerId,
  statusBadge,
  originBadge,
  onDeleted,
  onUpdated,
}: {
  plan: PlayerDevelopmentPlan;
  playerId?: string;
  statusBadge?: string;
  originBadge?: "TEMPLATE" | "INDIVIDUAL" | "TEAM";
  onDeleted: () => void;
  onUpdated: (plan: PlayerDevelopmentPlan) => void;
}) {
  const [expanded, setExpanded] = useState(true);
  const [showNewBlock, setShowNewBlock] = useState(false);
  const [editing, setEditing] = useState(false);
  const [blocks, setBlocks] = useState(plan.blocks);
  const [deleting, setDeleting] = useState(false);

  const totalAssignments = blocks.reduce((s, b) => s + b.assignments.length, 0);
  const completedAssignments = blocks.reduce(
    (s, b) => s + b.assignments.filter((a) => isCompletedAssignmentStatus(a.status)).length,
    0
  );
  const progress = totalAssignments > 0 ? Math.round((completedAssignments / totalAssignments) * 100) : 0;

  async function handleDelete() {
    if (!confirm(`Delete journey "${plan.name}"? This will also delete all training blocks and assignments.`)) return;
    setDeleting(true);
    try {
      await api.deletePlan(plan.id);
      toast.success("Journey deleted");
      onDeleted();
    } catch {
      toast.error("Failed to delete journey");
      setDeleting(false);
    }
  }

  if (editing) {
    return (
      <EditPlanForm
        plan={plan}
        onSaved={(updated) => { onUpdated(updated); setEditing(false); }}
        onCancel={() => setEditing(false)}
      />
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Plan header */}
      <div
        className="flex cursor-pointer items-start justify-between px-5 py-4"
        onClick={() => setExpanded((e) => !e)}
      >
        <div className="min-w-0 flex-1">
          <p className="font-extrabold text-lg text-slate-900 leading-tight truncate">{plan.name}</p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            {originBadge ? (
              <span className={cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
                originBadge === "TEMPLATE" && "bg-violet-100 text-violet-700",
                originBadge === "INDIVIDUAL" && "bg-blue-100 text-blue-700",
                originBadge === "TEAM" && "bg-emerald-100 text-emerald-700",
              )}>
                {originBadge === "TEMPLATE" ? "Template" : originBadge === "TEAM" ? "Team" : "Individual"}
              </span>
            ) : null}
            {statusBadge ? (
              <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold", STATUS_BADGE[statusBadge] ?? "bg-slate-100 text-slate-700")}>
                {STATUS_LABEL[statusBadge] ?? statusBadge}
              </span>
            ) : null}
            {plan.ownerType === "TEAM" ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                👥 Team{plan.team?.shortName ? ` · ${plan.team.shortName}` : ""}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                👤 Personal
              </span>
            )}
            {totalAssignments > 0 && (
              <span className="text-xs font-semibold text-blue-600">{progress}% complete</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0 ml-2" onClick={(e) => e.stopPropagation()}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setEditing(true)}
            className="text-slate-400 hover:text-amber-600 hover:bg-amber-50 h-8 w-8 p-0"
            title="Edit journey"
          >
            <Pencil className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            disabled={deleting}
            onClick={handleDelete}
            className="text-slate-400 hover:text-red-600 hover:bg-red-50 h-8 w-8 p-0"
            title="Delete journey"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
          <span className="text-slate-400">
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      {totalAssignments > 0 && (
        <div className="px-5 pb-3">
          <div className="h-1.5 w-full rounded-full bg-slate-100">
            <div
              className="h-1.5 rounded-full bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {expanded && (
        <div className="border-t border-gray-100 px-4 py-4 space-y-3">
          {plan.description && (
            <p className="text-sm text-slate-600">{plan.description}</p>
          )}

          {(plan.startDate || plan.endDate) && (
            <div className="flex items-center gap-4 text-xs text-slate-500">
              {plan.startDate && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(plan.startDate).toLocaleDateString()}
                </span>
              )}
              {plan.endDate && (
                <span>→ {new Date(plan.endDate).toLocaleDateString()}</span>
              )}
            </div>
          )}

          {/* Training blocks */}
          <div className="space-y-3">
            {blocks.map((block) => (
              <TrainingBlockCard
                key={block.id}
                block={block}
                playerId={playerId}
                onDeleted={() => setBlocks((prev) => prev.filter((b) => b.id !== block.id))}
                onUpdated={(updated) => setBlocks((prev) => prev.map((b) => b.id === updated.id ? { ...b, ...updated } : b))}
              />
            ))}

            {showNewBlock ? (
              <NewBlockForm
                planId={plan.id}
                onCreated={(block) => {
                  setBlocks((prev) => [...prev, block]);
                  setShowNewBlock(false);
                }}
                onCancel={() => setShowNewBlock(false)}
              />
            ) : (
              <button
                onClick={() => setShowNewBlock(true)}
                className="flex w-full items-center gap-2 rounded-xl border border-dashed border-gray-300 px-4 py-3 text-sm text-slate-500 hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Add Training Block
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── New Block Form ───────────────────────────────────────────────────────────

function NewBlockForm({
  planId,
  onCreated,
  onCancel,
}: {
  planId: string;
  onCreated: (block: TrainingBlock) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    try {
      const block = await api.createBlock(planId, {
        name: name.trim(),
        goal: goal.trim() || undefined,
      });
      if (block?.id) {
        onCreated(block);
        toast.success("Training block added");
      } else {
        toast.error("Failed to add block");
      }
    } catch {
      toast.error("Failed to add block");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card className="border border-blue-200 bg-blue-50/40">
      <CardContent className="p-3">
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            autoFocus
            required
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Block name (e.g. Putting Consistency)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Goal (optional)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <div className="flex gap-2">
            <Button type="submit" size="sm" disabled={saving} className="bg-blue-600 text-white hover:bg-blue-500">
              {saving ? "Adding…" : "Add Block"}
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

// ─── Edit Block Form ──────────────────────────────────────────────────────────

function EditBlockForm({
  block,
  onSaved,
  onCancel,
}: {
  block: TrainingBlock;
  onSaved: (updated: TrainingBlock) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(block.name);
  const [goal, setGoal] = useState(block.goal ?? "");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    try {
      const updated = await api.updateBlock(block.id, {
        name: name.trim(),
        goal: goal.trim() || undefined,
      });
      if (updated?.id) {
        onSaved(updated);
        toast.success("Block updated");
      } else {
        toast.error("Failed to update block");
      }
    } catch {
      toast.error("Failed to update block");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-3">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          autoFocus
          required
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200"
          placeholder="Block name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200"
          placeholder="Goal (optional)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <div className="flex gap-2">
          <Button type="submit" size="sm" disabled={saving} className="bg-amber-500 text-white hover:bg-amber-400">
            {saving ? "Saving…" : "Save"}
          </Button>
          <Button type="button" size="sm" variant="ghost" onClick={onCancel}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}

// ─── Training Block Card ──────────────────────────────────────────────────────

function TrainingBlockCard({
  block,
  playerId,
  onDeleted,
  onUpdated,
}: {
  block: TrainingBlock;
  playerId?: string;
  onDeleted: () => void;
  onUpdated: (block: TrainingBlock) => void;
}) {
  const [assignments, setAssignments] = useState<LessonAssignment[]>(block.assignments || []);
  const [showAddLesson, setShowAddLesson] = useState(false);
  const [editing, setEditing] = useState(false);
  const [lessons, setLessons] = useState<TrainingLesson[]>([]);
  const [loadingLessons, setLoadingLessons] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const total = assignments.length;
  const done = assignments.filter((a) => isCompletedAssignmentStatus(a.status)).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  async function loadLessons() {
    if (lessons.length > 0) return;
    setLoadingLessons(true);
    try {
      const data = await api.listLessons();
      setLessons(Array.isArray(data) ? data : []);
    } finally {
      setLoadingLessons(false);
    }
  }

  async function handleDeleteBlock() {
    if (!confirm(`Delete block "${block.name}"?`)) return;
    setDeleting(true);
    try {
      await api.deleteBlock(block.id);
      toast.success("Block deleted");
      onDeleted();
    } catch {
      toast.error("Failed to delete block");
      setDeleting(false);
    }
  }

  async function handleAddLesson(lessonId: string, dueDate?: string, priority?: string) {
    try {
      const assignment = await api.addAssignment(block.id, {
        lessonId,
        playerId,
        dueDate: dueDate || undefined,
        priority: priority || "MEDIUM",
        sortOrder: assignments.length,
      });
      if (assignment?.id) {
        setAssignments((prev) => [...prev, assignment]);
        toast.success("Lesson added to block");
        setShowAddLesson(false);
      } else {
        toast.error("Failed to add lesson");
      }
    } catch {
      toast.error("Failed to add lesson");
    }
  }

  async function handleRemoveAssignment(assignmentId: string) {
    try {
      await api.removeAssignment(assignmentId);
      setAssignments((prev) => prev.filter((a) => a.id !== assignmentId));
      toast.success("Lesson removed");
    } catch {
      toast.error("Failed to remove lesson");
    }
  }

  if (editing) {
    return (
      <EditBlockForm
        block={block}
        onSaved={(updated) => { onUpdated(updated); setEditing(false); }}
        onCancel={() => setEditing(false)}
      />
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      {/* Block header */}
      <div className="flex items-center justify-between px-4 py-3">
        <button
          className="flex items-center gap-2 min-w-0 flex-1 text-left"
          onClick={() => setExpanded((e) => !e)}
        >
          <div className="min-w-0">
            <p className="font-semibold text-slate-800 text-sm truncate">{block.name}</p>
            {block.goal && (
              <p className="text-xs text-slate-500 mt-0.5 truncate">Goal: {block.goal}</p>
            )}
          </div>
        </button>
        <div className="flex items-center gap-1 flex-shrink-0 ml-2">
          {/* Circular progress */}
          <div className="relative h-8 w-8 mr-1">
            <svg className="h-8 w-8 -rotate-90" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="12" fill="none" stroke="#e2e8f0" strokeWidth="3" />
              <circle
                cx="16"
                cy="16"
                r="12"
                fill="none"
                stroke={done === total && total > 0 ? "#22c55e" : "#3b82f6"}
                strokeWidth="3"
                strokeDasharray={`${(pct / 100) * 75.4} 75.4`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-slate-600">
              {pct}%
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setEditing(true)}
            className="text-slate-400 hover:text-amber-600 hover:bg-amber-50 h-7 w-7 p-0"
            title="Edit block"
          >
            <Pencil className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            disabled={deleting}
            onClick={handleDeleteBlock}
            className="text-slate-400 hover:text-red-600 hover:bg-red-50 h-7 w-7 p-0"
            title="Delete block"
          >
            <Trash2 className="h-3 w-3" />
          </Button>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-slate-400 hover:text-slate-600"
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Lessons */}
      {expanded && (
        <div className="border-t border-gray-100 bg-slate-50/30 px-4 py-3 space-y-2">
          {assignments.map((a) => (
            <AssignmentRow
              key={a.id}
              assignment={a}
              onRemove={() => handleRemoveAssignment(a.id)}
            />
          ))}

          {showAddLesson ? (
            <AddLessonForm
              lessons={lessons}
              loading={loadingLessons}
              onAdd={handleAddLesson}
              onCancel={() => setShowAddLesson(false)}
            />
          ) : (
            <button
              onClick={() => { setShowAddLesson(true); loadLessons(); }}
              className="flex w-full items-center gap-2 rounded-xl border border-dashed border-gray-200 px-3 py-2 text-xs text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              Add Lesson
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Assignment Row ───────────────────────────────────────────────────────────

function AssignmentRow({
  assignment,
  onRemove,
}: {
  assignment: LessonAssignment;
  onRemove: () => void;
}) {
  const focusEmoji = FOCUS_AREA_EMOJI[assignment.lesson.focusArea] ?? "📋";
  const focusPath = getFocusAreaPath(
    assignment.lesson.focusArea,
    assignment.lesson.subCapability,
    assignment.lesson.subSubCapability
  );
  const normalizedStatus = normalizeAssignmentStatus(assignment.status);
  const badgeClass = STATUS_BADGE[normalizedStatus] ?? "bg-slate-100 text-slate-600";
  const statusLabel = STATUS_LABEL[normalizedStatus] ?? normalizedStatus;

  return (
    <div className="flex items-center gap-3 rounded-xl border-2 border-gray-100 bg-white px-3 py-2.5">
      {/* Icon */}
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-base">
        {focusEmoji}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-800 truncate">{assignment.lesson.name}</p>
        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
          <span className="flex items-center gap-0.5">
            <Clock className="h-3 w-3" />
            {assignment.lesson.durationMinutes}m
          </span>
          <span>·</span>
          <span>{focusPath}</span>
          {assignment.dueDate && (
            <>
              <span>·</span>
              <span>Due {new Date(assignment.dueDate).toLocaleDateString()}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", badgeClass)}>
          {statusLabel}
        </span>
        <button
          onClick={onRemove}
          className="text-slate-300 hover:text-red-500 transition-colors"
          title="Remove lesson"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

// ─── Add Lesson Form ──────────────────────────────────────────────────────────

function AddLessonForm({
  lessons,
  loading,
  onAdd,
  onCancel,
}: {
  lessons: TrainingLesson[];
  loading: boolean;
  onAdd: (lessonId: string, dueDate?: string, priority?: string) => void;
  onCancel: () => void;
}) {
  const [lessonId, setLessonId] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("MEDIUM");

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-3 space-y-2">
      <select
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
        value={lessonId}
        onChange={(e) => setLessonId(e.target.value)}
      >
        <option value="">{loading ? "Loading lessons…" : "Select a lesson…"}</option>
        {lessons.map((l) => (
          <option key={l.id} value={l.id}>
            {l.name} ({FOCUS_AREAS.find((f) => f.value === l.focusArea)?.label ?? l.focusArea}, {l.durationMinutes}m)
          </option>
        ))}
      </select>
      <div className="flex gap-2">
        <input
          type="date"
          className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Due date (optional)"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          disabled={!lessonId}
          onClick={() => onAdd(lessonId, dueDate, priority)}
          className="bg-blue-600 text-white hover:bg-blue-500"
        >
          Add
        </Button>
        <Button size="sm" variant="ghost" onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function PlanSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-5 w-40 animate-pulse rounded bg-slate-200" />
        <div className="h-8 w-24 animate-pulse rounded bg-slate-200" />
      </div>
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-gray-200 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-5 w-48 animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-32 animate-pulse rounded bg-slate-200" />
            </div>
            <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />
          </div>
          <div className="space-y-2">
            <div className="h-14 w-full animate-pulse rounded-xl bg-slate-100" />
            <div className="h-14 w-full animate-pulse rounded-xl bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  );
}
