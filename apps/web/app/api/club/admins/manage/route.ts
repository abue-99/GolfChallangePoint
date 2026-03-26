import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";

export async function POST(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  const user = verifyJwt<any>(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { userId } = await req.json();

  if (user.role !== "CLUBADMIN" && user.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updated = await prisma.user.update({
    where: { id: userId },
    data: { role: "CLUBADMIN", clubId: user.clubId },
  });

  return NextResponse.json(updated);
}

export async function DELETE(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  const user = verifyJwt<any>(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { userId } = await req.json();

  if (user.role !== "CLUBADMIN" && user.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const updated = await prisma.user.update({
    where: { id: userId },
    data: { role: "PLAYER", clubId: null },
  });

  return NextResponse.json(updated);
}