"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  async function submit() {
    await fetch("/api/auth/reset", {
      method: "POST",
      body: JSON.stringify({ token, password }),
      headers: { "Content-Type": "application/json" },
    });

    setSuccess(true);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-muted/20">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {success ? (
            <p className="text-green-600">Password has been reset!</p>
          ) : (
            <>
              <Input
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                onClick={submit}
                className="w-full bg-[var(--golf-primary)] hover:bg-[var(--golf-primary-light)] text-white"
              >
                Reset Password
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}