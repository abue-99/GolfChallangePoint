"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export default function Topbar() {
  return (
    <header className="lg:hidden sticky top-0 z-50 bg-card border-b p-3 flex items-center justify-between shadow-sm">
      <div className="text-xl font-semibold">GolfCP</div>

      <Sheet>
        <SheetTrigger className="p-2 rounded-md hover:bg-muted">
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </header>
  );
}