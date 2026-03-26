"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UserSettingsSection() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/auth/me").then(r => r.json()).then(setUser);
  }, []);

  async function save() {
    await fetch("/api/user/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  }

  if (!user) return null;

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>My Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          placeholder="First Name"
        />
        <Input
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          placeholder="Last Name"
        />
        <Input
          value={user.profileImage || ""}
          onChange={(e) => setUser({ ...user, profileImage: e.target.value })}
          placeholder="Profile Image URL"
        />

        <Button onClick={save}>Save</Button>
      </CardContent>
    </Card>
  );
}