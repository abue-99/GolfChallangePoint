"use client";

import useSWR from "swr";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ClubAdminsPage() {
  const { data: admins, mutate } = useSWR("/api/club/admins", fetcher);
  const { data: users } = useSWR("/api/club/members", fetcher); // Liste aller Clubmitglieder

  const [newAdminEmail, setNewAdminEmail] = useState("");

  async function addAdmin() {
    await fetch("/api/club/admins/manage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: newAdminEmail }),
    });
    mutate();
  }

  async function removeAdmin(id: string) {
    await fetch("/api/club/admins/manage", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id }),
    });
    mutate();
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-semibold tracking-tight">
        Manage Club Admins
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Add Club Admin</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">

          <Input
            placeholder="User Email"
            value={newAdminEmail}
            onChange={(e) => setNewAdminEmail(e.target.value)}
          />

          <Button onClick={addAdmin} className="w-full">
            Add Admin
          </Button>

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Club Admins</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {admins?.map((a: any) => (
            <div
              key={a.id}
              className="flex items-center justify-between border p-3 rounded-md"
            >
              <div>
                <div className="font-medium">{a.firstName} {a.lastName}</div>
                <div className="text-sm text-muted-foreground">{a.email}</div>
              </div>

              <Button
                variant="destructive"
                onClick={() => removeAdmin(a.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  );
}