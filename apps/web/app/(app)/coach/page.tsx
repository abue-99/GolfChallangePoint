"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarDays, Route, Search, Users } from "lucide-react";
import type { CalendarActivity as BaseCalendarActivity } from "@/types/calendar";
import CompactCoachPlayerCard from "@/components/CompactCoachPlayerCard";
import PlayerOverviewDialog from "@/components/PlayerOverviewDialog";
import {
  hasOpenLifecycleItems,
} from "@/components/LearningProgress";
import { subscribeLearningProgressChanges } from "@/lib/learning-progress-events";

type Team = {
  id: string;
  shortName: string;
  icon?: string | null;
  members?: { userId: string }[];
};

type Player = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string;
  profileImage?: string | null;
  phoneNumber?: string | null;
  timezone?: string | null;
  lastLogin?: string | null;
  userClubs?: { clubId: string; club: { id: string; name: string } | null }[];
  coaches?: {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string;
  }[];
  learningProgress?: {
    lessons: {
      PENDING: number;
      ACCEPTED: number;
      ACTIVE: number;
      COMPLETED: number;
    };
    journeys: {
      PENDING: number;
      ACCEPTED: number;
      ACTIVE: number;
      COMPLETED: number;
    };
  };
};

type ItemCount = {
  plans: number;
  windows: number;
};

type CalendarActivity = Pick<
  BaseCalendarActivity,
  "id" | "title" | "start" | "end"
>;

function nameOfPlayer(player: Player) {
  return [player.firstName, player.lastName].filter(Boolean).join(" ") || player.email || "—";
}

function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase() || "?";
}

function hasItems(count?: ItemCount) {
  return Boolean(count && (count.plans > 0 || count.windows > 0));
}

export default function CoachHome() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [playerCounts, setPlayerCounts] = useState<Record<string, ItemCount>>({});
  const [teamCounts, setTeamCounts] = useState<Record<string, ItemCount>>({});
  const [nextUp, setNextUp] = useState<CalendarActivity | null>(null);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [viewerRole, setViewerRole] = useState<string | null>(null);

  const loadDashboardData = useCallback(async () => {
    setLoading(true);
    try {
      const [playersRes, teamsRes, me] = await Promise.all([
        fetch("/api/players/my", { cache: "no-store" }).then((r) => (r.ok ? r.json() : [])),
        fetch("/api/teams", { cache: "no-store" }).then((r) => (r.ok ? r.json() : [])),
        fetch("/api/auth/me", { cache: "no-store" }).then((r) =>
          r.ok ? r.json() : null,
        ),
      ]);

      const nextPlayers = Array.isArray(playersRes) ? playersRes : [];
      const nextTeams = Array.isArray(teamsRes) ? teamsRes : [];
      setViewerRole(typeof me?.role === "string" ? me.role : null);
      setPlayers(nextPlayers);
      setTeams(nextTeams);

      const coachCalendarPromise = me?.id
        ? fetch(`/api/calendar/player/${me.id}`, {
            cache: "no-store",
          }).then((r) => (r.ok ? r.json() : null))
        : Promise.resolve(null);

      const [coachCalendar, playerEntries, teamEntries] = await Promise.all([
        coachCalendarPromise,
        Promise.all(
          nextPlayers.map(async (player: Player) => {
            const [plans, calendar] = await Promise.all([
              fetch(`/api/development-plans/player/${player.id}`, { cache: "no-store" }).then((r) => (r.ok ? r.json() : [])),
              fetch(`/api/calendar/player/${player.id}`, { cache: "no-store" }).then((r) => (r.ok ? r.json() : { slots: [] })),
            ]);
            return [
              player.id,
              {
                plans: Array.isArray(plans) ? plans.length : 0,
                windows: Array.isArray(calendar?.slots) ? calendar.slots.length : 0,
              },
            ] as const;
          }),
        ),
        Promise.all(
          nextTeams.map(async (team: Team) => {
            const [plans, windows] = await Promise.all([
              fetch(`/api/development-plans/team/${team.id}`, { cache: "no-store" }).then((r) => (r.ok ? r.json() : [])),
              fetch(`/api/calendar/team-slots/${team.id}`, { cache: "no-store" }).then((r) => (r.ok ? r.json() : [])),
            ]);
            return [
              team.id,
              {
                plans: Array.isArray(plans) ? plans.length : 0,
                windows: Array.isArray(windows) ? windows.length : 0,
              },
            ] as const;
          }),
        ),
      ]);

      if (me?.id) {
        const nowMs = Date.now();
        const upcoming = (Array.isArray(coachCalendar?.activities)
          ? coachCalendar.activities
          : []
        )
          .filter(
            (activity: CalendarActivity) =>
              new Date(activity.end).getTime() >= nowMs,
          )
          .sort(
            (a: CalendarActivity, b: CalendarActivity) =>
              new Date(a.start).getTime() - new Date(b.start).getTime(),
          );
        setNextUp(upcoming[0] ?? null);
      }

      setPlayerCounts(Object.fromEntries(playerEntries));
      setTeamCounts(Object.fromEntries(teamEntries));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    void (async () => {
      if (ignore) return;
      await loadDashboardData();
    })();
    return () => {
      ignore = true;
    };
  }, [loadDashboardData]);

  useEffect(() => {
    if (viewerRole !== "COACH") {
      return;
    }

    return subscribeLearningProgressChanges(() => {
      void loadDashboardData();
    });
  }, [loadDashboardData, viewerRole]);

  const normalizedQuery = query.trim().toLowerCase();

  const visiblePlayers = useMemo(
    () =>
      players.filter((player) => {
        if (!hasItems(playerCounts[player.id])) return false;
        if (!normalizedQuery) return true;
        return nameOfPlayer(player).toLowerCase().includes(normalizedQuery);
      }),
    [normalizedQuery, playerCounts, players]
  );

  const activePlayers = useMemo(
    () =>
      players.filter((player) => {
        if (!hasOpenLifecycleItems(player.learningProgress?.journeys)) {
          return false;
        }
        if (!normalizedQuery) return true;
        return nameOfPlayer(player).toLowerCase().includes(normalizedQuery);
      }),
    [normalizedQuery, players],
  );
  const selectedPlayer = useMemo(
    () =>
      selectedPlayerId
        ? players.find((player) => player.id === selectedPlayerId) ?? null
        : null,
    [players, selectedPlayerId],
  );

  const visibleTeams = useMemo(
    () =>
      teams.filter((team) => {
        if (!hasItems(teamCounts[team.id])) return false;
        if (!normalizedQuery) return true;
        return team.shortName.toLowerCase().includes(normalizedQuery);
      }),
    [normalizedQuery, teamCounts, teams]
  );

  return (
    <div className="space-y-6">
      <Link href="/calendar" className="block">
        <Card className="border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <CardContent className="flex items-center justify-between gap-3 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <CalendarDays className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Next Up
                </p>
                <p className="font-semibold text-slate-800">
                  {nextUp ? nextUp.title : "No scheduled items"}
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold text-blue-700">Open Calendar</p>
          </CardContent>
        </Card>
      </Link>

      <header className="space-y-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Coach Dashboard</h1>
          <p className="text-sm text-slate-500">
            Teams und Spieler mit offenen Journey-Status.
          </p>
        </div>
        <div className="relative max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Suche Teams oder Spieler…"
            className="pl-9"
          />
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <SummaryCard
          title="Teams"
          icon={<Users className="h-4 w-4 text-emerald-600" />}
          value={visibleTeams.length}
          loading={loading}
        />
        <SummaryCard
          title="Spieler"
          icon={<Route className="h-4 w-4 text-blue-600" />}
          value={visiblePlayers.length}
          loading={loading}
        />
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Active Players</h2>
          <p className="text-sm text-slate-500">
            Pending, accepted, or active assignments at a glance.
          </p>
        </div>
        {loading ? (
          <div className="flex gap-3 overflow-x-auto pb-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="min-w-[220px] border border-gray-200 bg-white">
                <CardContent className="p-4">
                  <div className="h-20 animate-pulse rounded bg-slate-100" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : activePlayers.length === 0 ? (
          <EmptyState text="No active players right now." />
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {activePlayers.map((player) => {
              const name = nameOfPlayer(player);
              return (
                <button
                  key={player.id}
                  type="button"
                  onClick={() => setSelectedPlayerId(player.id)}
                  className="w-full text-left"
                >
                  <CompactCoachPlayerCard
                    name={name}
                    initials={initials(name)}
                    profileImage={player.profileImage}
                    progress={player.learningProgress}
                    avatarFallbackClassName="bg-blue-100 text-xl text-blue-700"
                  />
                </button>
              );
            })}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-800">Teams</h2>
        {loading ? (
          <SkeletonGrid />
        ) : visibleTeams.length === 0 ? (
          <EmptyState text="Keine Teams mit aktueller Journey oder Trainingsfenster." />
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {visibleTeams.map((team) => (
              <Link key={team.id} href="/teams">
                <Card className="h-full border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="flex flex-col items-center gap-3 p-4 text-center">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-emerald-100 text-xl text-emerald-700">
                        {team.icon || initials(team.shortName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="font-medium text-slate-800">{team.shortName}</p>
                      <CountsBadge counts={teamCounts[team.id]} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-800">Spieler</h2>
        {loading ? (
          <SkeletonGrid />
        ) : visiblePlayers.length === 0 ? (
          <EmptyState text="Keine Spieler mit aktueller Journey oder Trainingsfenster." />
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {visiblePlayers.map((player) => {
              const name = nameOfPlayer(player);
              return (
                <Link key={player.id} href={`/coach/players/${player.id}`}>
                  <CompactCoachPlayerCard
                    name={name}
                    initials={initials(name)}
                    profileImage={player.profileImage}
                    progress={player.learningProgress}
                    avatarFallbackClassName="bg-blue-100 text-xl text-blue-700"
                  />
                </Link>
              );
            })}
          </div>
        )}
      </section>
      {selectedPlayer ? (
        <PlayerOverviewDialog
          player={selectedPlayer}
          onClose={() => setSelectedPlayerId(null)}
        />
      ) : null}
    </div>
  );
}

function SummaryCard({
  title,
  icon,
  value,
  loading,
}: {
  title: string;
  icon: React.ReactNode;
  value: number;
  loading: boolean;
}) {
  return (
    <Card className="border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm text-slate-500">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-semibold text-slate-900">{loading ? "…" : value}</div>
      </CardContent>
    </Card>
  );
}

function CountsBadge({ counts }: { counts?: ItemCount }) {
  return (
    <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
        <Route className="h-3 w-3" />
        {counts?.plans ?? 0}
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-blue-700">
        <CalendarDays className="h-3 w-3" />
        {counts?.windows ?? 0}
      </span>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <Card className="border border-dashed">
      <CardContent className="p-8 text-center text-sm text-slate-500">{text}</CardContent>
    </Card>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Card key={index} className="border border-gray-200 bg-white">
          <CardContent className="flex flex-col items-center gap-3 p-4">
            <div className="h-16 w-16 animate-pulse rounded-full bg-slate-200" />
            <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
