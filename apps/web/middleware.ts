import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";

export function middleware(req: Request) {
  const url = new URL(req.url);
  const path = url.pathname;

  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  const payload = token ? verifyJwt<any>(token) : null;

  // Public
  if (path.startsWith("/signup") || path.startsWith("/login")) {
    return NextResponse.next();
  }

  // Not logged in
  if (!payload) return NextResponse.redirect("/login");

  // Superadmin: alles erlaubt
  if (payload.role === "SUPERADMIN") return NextResponse.next();

  // Clubadmin:
  if (path.startsWith("/club")) {
    if (payload.role !== "CLUBADMIN") return NextResponse.redirect("/unauthorized");
    return NextResponse.next();
  }

  // Coach:
  if (path.startsWith("/coach")) {
    if (payload.role !== "COACH") return NextResponse.redirect("/unauthorized");
    return NextResponse.next();
  }

  // Player:
  if (path.startsWith("/player")) {
    if (payload.role !== "PLAYER") return NextResponse.redirect("/unauthorized");
    return NextResponse.next();
  }

  return NextResponse.next();
}