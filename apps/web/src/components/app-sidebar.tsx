"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Calendar, Users, Home, LogIn } from "lucide-react";

const nav = [
  { href: "/coach/players", label: "Players", icon: Users },
  { href: "/coach", label: "Coach Calendar", icon: Calendar },
  { href: "/player", label: "Player Today", icon: Home },
  { href: "/auth", label: "Login", icon: LogIn },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-dvh w-64 border-r bg-background">
      <div className="p-4 text-lg font-semibold">Challangepoint</div>
      <nav className="px-2">
        {nav.map((n) => {
          const Icon = n.icon as any;
          const active = pathname.startsWith(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                active && "bg-accent text-accent-foreground"
              )}
            >
              <Icon size={18} />
              <span>{n.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
