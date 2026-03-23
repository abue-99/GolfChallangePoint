"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserSettingsSection from "./user-settings-section";
import ClubSettingsSection from "./club-settings-section";
import ClubAdminsSection from "./club-admins-section";

export default function SettingsPage() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      setRole(data?.role ?? null);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div className="p-6">Loading settings...</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Settings</h1>

      <Tabs defaultValue="user" className="space-y-6">

        {/* Tab Buttons */}
        <TabsList>
          <TabsTrigger value="user">My Profile</TabsTrigger>

          {(role === "COACH" || role === "CLUBADMIN" || role === "SUPERADMIN") && (
            <TabsTrigger value="club">Club Settings</TabsTrigger>
          )}

          {(role === "CLUBADMIN" || role === "SUPERADMIN") && (
            <TabsTrigger value="admins">Club Admins</TabsTrigger>
          )}
        </TabsList>

        {/* USER SETTINGS TAB */}
        <TabsContent value="user">
          <UserSettingsSection />
        </TabsContent>

        {/* CLUB SETTINGS TAB */}
        {(role === "COACH" || role === "CLUBADMIN" || role === "SUPERADMIN") && (
          <TabsContent value="club">
            <ClubSettingsSection role={role!} />
          </TabsContent>
        )}

        {/* CLUB ADMIN MANAGEMENT TAB */}
        {(role === "CLUBADMIN" || role === "SUPERADMIN") && (
          <TabsContent value="admins">
            <ClubAdminsSection />
          </TabsContent>
        )}

      </Tabs>
    </div>
  );
}