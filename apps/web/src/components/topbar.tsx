"use client";
import { ModeToggle } from "@/components/theme-toggle";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 h-14 border-b bg-background">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-6">
        <div className="font-medium">MVP</div>
        <ModeToggle />
      </div>
    </header>
  );
}
