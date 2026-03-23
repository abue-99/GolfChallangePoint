"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Trophy } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your training, progress and performance
          </p>
        </div>

        <Button className="gap-2">
          Go to Today
          <ArrowRight className="h-4 w-4" />
        </Button>
      </header>

      {/* KPI Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Completed Today
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold flex items-center gap-2">
            3 <CheckCircle2 className="h-6 w-6 text-success" />
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Weekly Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold flex items-center gap-2">
            8 <TrendingUp className="h-6 w-6 text-primary" />
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Average Score
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold flex items-center gap-2">
            72.4
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Season Rank
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-semibold flex items-center gap-2">
            #12 <Trophy className="h-6 w-6 text-yellow-500" />
          </CardContent>
        </Card>
      </section>

      {/* Today Preview */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Today’s Plan</h2>
          <Button variant="ghost" size="sm">View all</Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Wiederverwendbare Mini-Cards */}
          {[
            { title: "Putting 3m drill", tag: "Putting", color: "primary" },
            { title: "Approach Wedge", tag: "Wedge", color: "secondary" },
            { title: "Mindset Reflection", tag: "Mindset", color: "accent" }
          ].map((t, i) => (
            <Card key={i} className="shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">{t.title}</div>
                    <Badge variant="outline" className="mt-2">{t.tag}</Badge>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-primary mt-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Last Activities */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <Button variant="ghost" size="sm">See more</Button>
        </div>

        <Card className="shadow-sm">
          <CardContent className="divide-y p-0">
            {[
              { msg: "Completed Putting 3m drill", time: "2 hours ago" },
              { msg: "Logged reflection", time: "5 hours ago" },
              { msg: "Finished Approach Wedge", time: "Yesterday" }
            ].map((a, i) => (
              <div key={i} className="p-4 flex items-center justify-between">
                <span className="text-sm">{a.msg}</span>
                <span className="text-xs text-muted-foreground">{a.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Charts */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Performance</h2>

        <Card className="h-64 flex items-center justify-center border-dashed text-muted-foreground">
          Chart placeholder (Recharts / Your choice)
        </Card>
      </section>
    </div>
  );
}