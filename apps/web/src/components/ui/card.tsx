import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Basis-Card mit weichem Shadow und hellem Border.
 * Du kannst die Klassen global anpassen, wenn du ein anderes Theme willst.
 */
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white",
        "shadow-[0_10px_30px_-10px_rgba(2,6,23,.12)]",
        className
      )}
      {...props}
    />
  );
}

/** Kopfbereich der Card (Border unten + Padding) */
export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-5 border-b border-gray-100", className)}
      {...props}
    />
  );
}

/** Titel der Card (Semantik + Typo) */
export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

/** Inhaltsbereich der Card (Padding) */
export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5", className)} {...props} />;
}
``