"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogDialog } from "@/components/log-dialog";
import { Check, ListTodo, Plus, X } from "lucide-react";
import Link from "next/link";

type Schema = "numeric_success" | "numeric_score" | "text_reflection";
type TodayTask = { eventId: string; title: string; schema: Schema; status?: "open" | "done"; tag?: string };

const todayTasks: TodayTask[] = [
  { eventId: "evt_1", title: "Putting 3m drill", schema: "numeric_success", tag: "Putting", status: "open" },
  { eventId: "evt_2", title: "Approach wedge", schema: "numeric_score", tag: "Wedge", status: "open" },
  { eventId: "evt_3", title: "Reflection", schema: "text_reflection", tag: "Mindset", status: "open" }
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
      {children}
    </span>
  );
}

export default function PlayerToday() {
  const completed = useMemo(() => todayTasks.filter(t => t.status === "done").length, []);
  const total = todayTasks.length;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Today</h1>
          <p className="text-sm text-slate-500">Your plan for the day at a glance</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/tasks/new">
            <Button className="bg-blue-600 text-white hover:bg-blue-500">
              <Plus className="mr-2 h-4 w-4" />
              New Task
            </Button>
          </Link>
          <Button variant="ghost" className="text-slate-600 hover:text-blue-700 hover:bg-blue-50">
            Quick Start
          </Button>
        </div>
      </header>

      {/* Progress */}
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Progress</CardTitle>
          <span className="text-sm text-slate-500">{progress}%</span>
        </CardHeader>
        <CardContent>
          <div className="h-2 w-full rounded-full bg-slate-100">
            <div className="h-2 rounded-full bg-blue-500 transition-all" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            {completed} of {total} tasks completed
          </p>
        </CardContent>
      </Card>

      {/* Task Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {todayTasks.map((t) => (
          <Card
            key={t.eventId}
            className="border border-gray-200 bg-white shadow-[0_10px_30px_-10px_rgba(2,6,23,.12)] transition-shadow hover:shadow-[0_16px_36px_-12px_rgba(2,6,23,.18)]"
          >
            <CardContent className="p-4">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <div className="font-medium text-slate-800">{t.title}</div>
                  {t.tag ? (
                    <div className="mt-1">
                      <Tag>{t.tag}</Tag>
                    </div>
                  ) : null}
                </div>
                {/* Status-Dot */}
                <span
                  className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${
                    t.status === "done" ? "bg-emerald-500" : "bg-blue-500"
                  }`}
                />
              </div>

              {/* Aktionen */}
              <div className="flex items-center gap-2">
                {/* Log öffnet dein Dialog-Component (übernimmt Schema & eventId) */}
                <LogDialog eventId={t.eventId} schema={t.schema} />

                {/* Beispielhafte weitere Actions (kannst du später verdrahten) */}
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="text-emerald-600 hover:bg-emerald-50"
                  aria-label="Mark done"
                  title="Mark as done"
                >
                  <Check className="h-4 w-4" />
                </Button>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="text-slate-500 hover:bg-slate-100"
                  aria-label="Remove"
                  title="Remove"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State (falls keine Tasks) */}
      {todayTasks.length === 0 && (
        <Card className="border border-dashed">
          <CardContent className="p-6 text-center text-slate-500">
            No tasks for today.{" "}
            <Link className="text-blue-700 underline-offset-4 hover:underline" href="/tasks/new">
              Create one
            </Link>
            .
          </CardContent>
        </Card>
      )}
    </div>
  );
}
``