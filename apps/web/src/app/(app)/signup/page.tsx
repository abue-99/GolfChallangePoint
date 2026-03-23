"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    profileImage: "",
  });

  async function handleSubmit() {
    setLoading(true);

    await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted/30">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Create your Golf Challenge Point Account
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          <Input
            placeholder="Email"
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Input
            placeholder="First Name"
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />

          <Input
            placeholder="Last Name"
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />

          <Input
            placeholder="Profile Image URL (optional)"
            onChange={(e) => setForm({ ...form, profileImage: e.target.value })}
          />

          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Create Account"}
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}