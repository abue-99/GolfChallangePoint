import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@golf/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  const payload = token ? verifyJwt<any>(token) : null;

  if (!payload) return NextResponse.json({ user: null });

  const user = await prisma.user.findUnique({
    where: { id: payload.id },
  });

  return NextResponse.json(user);
}