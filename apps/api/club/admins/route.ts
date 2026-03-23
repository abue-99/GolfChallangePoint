import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";

export async function GET(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  const user = verifyJwt<any>(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!user.clubId && user.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "No club assigned" }, { status: 400 });
  }

  const clubId = user.role === "SUPERADMIN" ? undefined : user.clubId;

  const admins = await prisma.user.findMany({
    where: {
      role: "CLUBADMIN",
      clubId: clubId,
    },
  });

  return NextResponse.json(admins);
}