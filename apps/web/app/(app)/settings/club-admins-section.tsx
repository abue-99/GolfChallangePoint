"use client";

import useSWR from "swr";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function ClubAdminsSection() {
  const { data: admins, mutate } = useSWR("/api/club/admins", fetcher);
  const [email, setEmail] = useState("");

  async function addAdmin() {
    await fetch("/api/club/admins/manage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: email }),
    });
    mutate();
    setEmail("");
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
    <div className="space-y-6">

      {/* Add Admin */}
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Add Club Admin</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            value={email}
            placeholder="User Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={addAdmin} className="w-full">
            Add Admin
          </Button>
        </CardContent>
      </Card>

      {/* Current Admins */}
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
                <div className="font-medium">
                  {a.firstName} {a.lastName}
                </div>
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