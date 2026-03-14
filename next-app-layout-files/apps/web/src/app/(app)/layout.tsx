
import type { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Topbar } from "@/components/topbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <div className="flex min-h-dvh flex-1 flex-col">
        <Topbar />
        <main className="mx-auto w-full max-w-screen-2xl p-6">{children}</main>
      </div>
    </div>
  );
}
