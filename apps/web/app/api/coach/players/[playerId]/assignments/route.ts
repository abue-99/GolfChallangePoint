import { NextRequest } from "next/server";
import { proxyJsonWithAuthRetry } from "@/lib/api-proxy-auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ playerId: string }> },
) {
  try {
    const { playerId } = await params;
    const qs = req.nextUrl.searchParams.toString();
    const query = qs ? `?${qs}` : "";
    return await proxyJsonWithAuthRetry({
      path: `/coach/players/${encodeURIComponent(playerId)}/assignments${query}`,
      method: "GET",
      missingTokenBody: [],
    });
  } catch (err) {
    console.error("[/api/coach/players/[playerId]/assignments GET]", err);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ playerId: string }> },
) {
  try {
    const { playerId } = await params;
    const body = await req.json();
    return await proxyJsonWithAuthRetry({
      path: `/coach/players/${encodeURIComponent(playerId)}/assignments`,
      method: "POST",
      body,
      missingTokenBody: null,
    });
  } catch (err) {
    console.error("[/api/coach/players/[playerId]/assignments POST]", err);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
