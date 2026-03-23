"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function submit() {
    await fetch("/api/auth/forgot", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    setSent(true);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-muted/20">
      <Card className="w-full max-w-sm shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Forgot Password</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {sent ? (
            <p className="text-sm text-green-600">
              If an account exists with this email, a reset link has been sent.
            </p>
          ) : (
            <>
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                onClick={submit}
                className="w-full bg-[var(--golf-primary)] hover:bg-[var(--golf-primary-light)] text-white"
              >
                Send Reset Link
              </Button>

              /loginBack to Login
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}