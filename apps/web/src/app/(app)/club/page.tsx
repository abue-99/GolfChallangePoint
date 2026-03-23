"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClubDashboard() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-semibold tracking-tight">
        Club Admin Panel
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Club Settings */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Club Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            /club/settings
              Edit Club Information
            </Button>
          </CardContent>
        </Card>

        {/* Manage Coaches */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Manage Coaches</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            /club/coaches
              Open Coach Management
            </Button>
          </CardContent>
        </Card>

        {/* Club Admins */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Club Admins</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            /club/admins
              Manage Club Admins
            </Button>
          </CardContent>
        </Card>

        {/* Players */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Players & Assignments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            /club/players
              Manage Players
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}