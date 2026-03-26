"use client";

import { useState, useEffect, useCallback } from "react";

export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "PLAYER" | "COACH" | "CLUBADMIN" | "SUPERADMIN";
  clubId: string | null;
};

/**
 * Custom hook to access the currently authenticated user.
 * Fetches user data from the /auth/me endpoint on mount.
 */
export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/auth/me", { credentials: "include" });
      if (!res.ok) {
        setUser(null);
        return;
      }
      const data = await res.json();
      setUser(data);
    } catch {
      setError("Failed to fetch user");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const logout = useCallback(() => {
    document.cookie = "token=; Path=/; Max-Age=0; SameSite=Lax;";
    window.location.href = "/login";
  }, []);

  return { user, loading, error, refetch: fetchUser, logout };
}
