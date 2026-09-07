"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, User, Users } from "lucide-react";
import Link from "next/link";
import PlayerHomeDashboard from "@/components/PlayerHomeDashboard";
import NewAssignmentsSection from "@/components/NewAssignmentsSection";
import type { CalendarActivity as BaseCalendarActivity } from "@/types/calendar";
import { formatDateInTimeZone, resolveCalendarTimeZone } from "@/lib/timezone";
import PlayerOverviewDialog from "@/components/PlayerOverviewDialog";
import {
  LearningProgressSection,
  hasVisibleLearningProgress,
} from "@/components/LearningProgress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { subscribeLearningProgressChanges } from "@/lib/learning-progress-events";

type Team = {
  id: string;
  shortName: string;
  updatedAt?: string;
  createdAt?: string;
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
    recentCompletions?: {
      lessons?: number | null;
      journeys?: number | null;
    } | null;
  };
};

type CalendarActivity = Pick<
  BaseCalendarActivity,
  "id" | "title" | "start" | "end"
>;

const DEFAULT_PLAYER_ID = "local-player";

function formatScheduleTime(value: string, timeZone: string) {
  return formatDateInTimeZone(value, timeZone, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function playerName(player: Player) {
  return [player.firstName, player.lastName].filter(Boolean).join(" ") || player.email || "—";
}

function playerInitials(player: Player) {
  const name = playerName(player).split(" ").filter(Boolean);
  return `${name[0]?.[0] ?? ""}${name[1]?.[0] ?? ""}`.toUpperCase() || "?";
}

export default function Dashboard() {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [playerId, setPlayerId] = useState<string>(DEFAULT_PLAYER_ID);
  const [playerFirstName, setPlayerFirstName] = useState<string>("");
  const [teams, setTeams] = useState<Team[]>([]);
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [coachPlayers, setCoachPlayers] = useState<Player[]>([]);
  const [coachCalendarActivities, setCoachCalendarActivities] = useState<
    CalendarActivity[]
  >([]);
  const [viewerTimeZone, setViewerTimeZone] = useState<string>("local");
  const [coachNowIso, setCoachNowIso] = useState<string>(() =>
    new Date().toISOString(),
  );
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.ok ? r.json() : null)
      .then((me) => {
        if (me?.role) setRole(me.role);
        if (me?.id) setPlayerId(String(me.id));
        if (me?.firstName) setPlayerFirstName(me.firstName);
        setViewerTimeZone(resolveCalendarTimeZone(me?.timezone));
      });
  }, []);

  const loadCoachSummary = useCallback(async () => {
    if (role !== "COACH" && role !== "ADMIN") return;
    try {
      const [t, p] = await Promise.all([
        fetch("/api/teams", { cache: "no-store" }).then((r) => (r.ok ? r.json() : [])),
        fetch("/api/players/my", { cache: "no-store" }).then((r) => (r.ok ? r.json() : [])),
      ]);
      const nextPlayers = Array.isArray(p) ? p : [];
      setTeams(Array.isArray(t) ? t : []);
      setCoachPlayers(nextPlayers);
      setPlayerCount(nextPlayers.length);
    } catch {}
  }, [role]);

  useEffect(() => {
    let ignore = false;
    void (async () => {
      if (ignore) return;
      await loadCoachSummary();
    })();
    return () => {
      ignore = true;
    };
  }, [loadCoachSummary]);

  useEffect(() => {
    if (role !== "COACH" || !playerId || playerId === DEFAULT_PLAYER_ID) return;
    fetch(`/api/calendar/player/${playerId}`, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        setCoachCalendarActivities(
          Array.isArray(data?.activities) ? data.activities : [],
        );
        setCoachNowIso(new Date().toISOString());
      })
      .catch(() => {
        setCoachCalendarActivities([]);
        setCoachNowIso(new Date().toISOString());
      });
  }, [role, playerId]);

  useEffect(() => {
    if (role !== "COACH" && role !== "ADMIN") return;
    return subscribeLearningProgressChanges(() => {
      void loadCoachSummary();
    });
  }, [loadCoachSummary, role]);

  const isCoachOrAdmin = role === "COACH" || role === "ADMIN";
  const coachNowMs = new Date(coachNowIso).getTime();
  const upcomingCoachItems = coachCalendarActivities
    .filter((activity) => new Date(activity.end).getTime() >= coachNowMs)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  const coachNextUp = upcomingCoachItems[0] ?? null;
  const activePlayers = useMemo(
    () => coachPlayers.filter((player) => hasVisibleLearningProgress(player.learningProgress)),
    [coachPlayers],
  );
  const selectedPlayer = useMemo(
    () =>
      selectedPlayerId
        ? coachPlayers.find((player) => player.id === selectedPlayerId) ?? null
        : null,
    [coachPlayers, selectedPlayerId],
  );

  return (
    <div className="space-y-6 px-0">
      {role !== "PLAYER" ? (
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--golf-heading)]">
            Dashboard
          </h1>
        </header>
      ) : null}

      {role === "COACH" ? (
        <Link href="/calendar" className="block">
          <Card className="border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <CalendarDays className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Next Up
                    </p>
                    <p className="font-semibold text-slate-700">
                      {coachNextUp ? coachNextUp.title : "No scheduled items"}
                    </p>
                    {coachNextUp ? (
                      <p className="text-xs text-slate-500">
                        {formatScheduleTime(coachNextUp.start, viewerTimeZone)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <span className="text-sm font-semibold text-blue-700">
                  Open Calendar
                </span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : null}

      {isCoachOrAdmin ? (
        <section className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold text-[var(--golf-heading)]">
              Active Players
            </h2>
            <p className="text-sm text-[var(--golf-muted-text)]">
              Players with open learning activity or completions from the last 90 days.
            </p>
          </div>
          {activePlayers.length === 0 ? (
            <Card className="border border-dashed border-[var(--golf-muted)] shadow-sm">
              <CardContent className="p-6 text-sm text-[var(--golf-muted-text)]">
                No active players right now.
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {activePlayers.map((player) => (
                <button
                  key={player.id}
                  type="button"
                  onClick={() => setSelectedPlayerId(player.id)}
                  className="text-left"
                >
                  <Card className="h-full border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
                    <CardContent className="flex items-center gap-3 p-4">
                      <Avatar className="h-14 w-14">
                        {player.profileImage ? (
                          <AvatarImage src={player.profileImage} alt={playerName(player)} />
                        ) : null}
                        <AvatarFallback className="bg-blue-100 text-lg text-blue-700">
                          {playerInitials(player)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-[var(--golf-heading)]">
                          {playerName(player)}
                        </p>
                        <LearningProgressSection
                          progress={player.learningProgress}
                          compact
                        />
                      </div>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          )}
        </section>
      ) : null}

      {/* Role-specific tiles */}
      {isCoachOrAdmin && (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Teams/Players tile – double-click navigates to /teams */}
          <Card
            className="shadow-sm hover:shadow-md transition-all border border-[var(--golf-muted)] cursor-pointer select-none"
            onClick={() => router.push("/teams")}
            onDoubleClick={() => router.push("/teams")}
            title="Click to open Teams/Players"
          >
            <CardHeader>
              <CardTitle className="text-sm text-[var(--golf-muted-text)]">
                Teams / Players
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row gap-6">
              <div className="flex items-center gap-2 text-2xl font-semibold text-[var(--golf-heading)]">
                <Users className="h-5 w-5 text-[var(--golf-primary)]" />
                <span>{teams.length}</span>
              </div>
              <div className="flex items-center gap-2 text-2xl font-semibold text-[var(--golf-heading)]">
                <User className="h-5 w-5 text-[var(--golf-primary)]" />
                <span>{playerCount}</span>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Player dashboard */}
      {role === "PLAYER" && (
        <section className="space-y-6">
          <NewAssignmentsSection />
          <PlayerHomeDashboard
            firstName={playerFirstName}
            playerId={playerId}
            timeZone={viewerTimeZone}
          />
        </section>
      )}

      {/* SysAdmin dashboard */}
      {role === "SYSADMIN" && (
        <section className="space-y-3">
          <p className="text-sm text-[var(--golf-muted-text)]">
            System administration overview. Use Settings to manage clubs and users.
          </p>
        </section>
      )}
      {selectedPlayer ? (
        <PlayerOverviewDialog
          player={selectedPlayer}
          onClose={() => setSelectedPlayerId(null)}
        />
      ) : null}
    </div>
  );
}
