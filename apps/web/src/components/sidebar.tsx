"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  ListTodo,
  BarChart3,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Today", href: "/player/today", icon: CalendarCheck },
  { label: "Tasks", href: "/player/tasks", icon: ListTodo },
  { label: "Stats", href: "/player/stats", icon: BarChart3 }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 border-r bg-card p-4 shadow-sm">
      {/* Brand */}

	  <div className="flex items-center gap-3 mb-6">
		<img 
		src="/GolfChallengePoint Logo.png" 
		alt="Golf Challenge Point Logo" 
		className="h-8 w-8"
		/>
		<span className="text-xl font-semibold text-[var(--golf-primary)]">
			Golf CP
		</span>
	  </div>


      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer (Settings) */}
      <div className="mt-auto pt-6 border-t">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 text-sm px-3 py-2 rounded-md transition-colors",
            "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </aside>
  );
}