"use client";

import Link from "next/link";
import { ExternalLink, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlayerCapabilitiesRadarCard } from "@/components/player-capabilities-widget";
import {
  LearningProgressSection,
  type LearningProgressSummary,
} from "@/components/LearningProgress";

type CoachSummary = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string;
};

type ClubSummary = {
  clubId: string;
  club: { id: string; name: string } | null;
};

export type PlayerOverviewDialogPlayer = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  profileImage?: string | null;
  email?: string;
  phoneNumber?: string | null;
  timezone?: string | null;
  lastLogin?: string | null;
  userClubs?: ClubSummary[];
  coaches?: CoachSummary[];
  learningProgress?: LearningProgressSummary | null;
};

function playerName(player: PlayerOverviewDialogPlayer) {
  return (
    `${player.firstName ?? ""} ${player.lastName ?? ""}`.trim() ||
    player.email ||
    "—"
  );
}

function playerInitials(player: PlayerOverviewDialogPlayer) {
  return (
    `${player.firstName?.[0] ?? ""}${player.lastName?.[0] ?? ""}`.toUpperCase() ||
    "?"
  );
}

export default function PlayerOverviewDialog({
  player,
  onClose,
  onRemove,
}: {
  player: PlayerOverviewDialogPlayer;
  onClose: () => void;
  onRemove?: (playerId: string) => void | Promise<void>;
}) {
  const isInactive = !player.lastLogin;
  const name = playerName(player);

  async function handleRemove() {
    if (!onRemove) return;
    await onRemove(player.id);
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Player Overview</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 pt-2 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              {player.profileImage ? (
                <AvatarImage src={player.profileImage} alt={name} />
              ) : null}
              <AvatarFallback className="bg-gray-200 text-2xl text-gray-600">
                {playerInitials(player)}
              </AvatarFallback>
            </Avatar>

            {isInactive ? (
              <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-700">
                Inactive (pending activation)
              </span>
            ) : null}

            <div className="w-full space-y-2 text-sm">
              <div className="flex justify-between gap-2">
                <span className="font-medium text-gray-500">Name</span>
                <span className="text-right">{name}</span>
              </div>
              {player.email ? (
                <div className="flex justify-between gap-2">
                  <span className="font-medium text-gray-500">Email</span>
                  <span className="break-all text-right">{player.email}</span>
                </div>
              ) : null}
              {player.phoneNumber ? (
                <div className="flex justify-between gap-2">
                  <span className="font-medium text-gray-500">Phone</span>
                  <span className="text-right">{player.phoneNumber}</span>
                </div>
              ) : null}
              {player.timezone ? (
                <div className="flex justify-between gap-2">
                  <span className="font-medium text-gray-500">Timezone</span>
                  <span className="text-right">
                    {player.timezone.replace(/_/g, " ")}
                  </span>
                </div>
              ) : null}
              {player.userClubs?.length ? (
                <div className="flex justify-between gap-2">
                  <span className="shrink-0 font-medium text-gray-500">
                    Clubs
                  </span>
                  <span className="text-right">
                    {player.userClubs
                      .map((club) => club.club?.name ?? "")
                      .filter(Boolean)
                      .join(", ")}
                  </span>
                </div>
              ) : null}
              {player.coaches?.length ? (
                <div className="flex justify-between gap-2">
                  <span className="shrink-0 font-medium text-gray-500">
                    Coaches
                  </span>
                  <span className="text-right">
                    {player.coaches
                      .map(
                        (coach) =>
                          `${coach.firstName ?? ""} ${coach.lastName ?? ""}`.trim() ||
                          coach.email ||
                          "",
                      )
                      .filter(Boolean)
                      .join(", ")}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="w-full">
              <LearningProgressSection progress={player.learningProgress} />
            </div>

            <div className="mt-2 flex w-full flex-col gap-2">
              <Button asChild variant="outline" className="w-full">
                <Link
                  href={`/coach/players/${player.id}`}
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Goto/Open Player
                </Link>
              </Button>

              {onRemove ? (
                <Button
                  variant="destructive"
                  className="w-full gap-2"
                  onClick={handleRemove}
                >
                  <Trash2 size={16} />
                  Delete Player
                </Button>
              ) : null}
            </div>
          </div>

          <div>
            <PlayerCapabilitiesRadarCard
              playerId={player.id}
              title="Skill Radar"
              journeyLabel="Goto Journey"
              journeyHref={`/coach/players/${player.id}`}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
