"use client";

import type { ReactNode } from "react";
import { CompactLearningSummary, type LearningProgressSummary } from "@/components/LearningProgress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CompactCoachPlayerCardProps = {
  name: string;
  initials: string;
  profileImage?: string | null;
  progress?: LearningProgressSummary | null;
  inactive?: boolean;
  statusContent?: ReactNode;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
  nameClassName?: string;
  avatarFallbackClassName?: string;
};

export default function CompactCoachPlayerCard({
  name,
  initials,
  profileImage,
  progress,
  inactive = false,
  statusContent,
  footer,
  className,
  contentClassName,
  nameClassName,
  avatarFallbackClassName,
}: CompactCoachPlayerCardProps) {
  return (
    <Card
      className={cn(
        "h-full rounded-xl border border-[var(--golf-muted)] bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <CardContent
        className={cn(
          "flex flex-col items-center gap-2.5 p-4 text-center",
          contentClassName,
        )}
      >
        <div className="relative">
          <Avatar className="h-16 w-16">
            {profileImage ? <AvatarImage src={profileImage} alt={name} /> : null}
            <AvatarFallback className={cn("bg-gray-200 text-xl text-gray-600", avatarFallbackClassName)}>
              {initials}
            </AvatarFallback>
          </Avatar>
          {inactive ? (
            <span
              className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-amber-400"
              aria-label="Inactive player"
              role="img"
              title="Inactive"
            />
          ) : null}
        </div>
        <span
          className={cn(
            "line-clamp-2 min-h-[2.5rem] text-sm font-medium leading-snug text-[var(--golf-heading)]",
            nameClassName,
          )}
        >
          {name}
        </span>
        {statusContent ?? <CompactLearningSummary progress={progress} className="w-full" />}
        {footer ? <div className="flex w-full justify-center">{footer}</div> : null}
      </CardContent>
    </Card>
  );
}
