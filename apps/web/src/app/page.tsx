import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { verifyJwt } from "@/lib/jwt";
import Dashboard from "./(app)/dashboard/page";

export default async function HomePage() {
  // headers() is async in Next.js 15+
  const h = await headers();
  const cookieHeader = h.get("cookie") || "";

  const match = cookieHeader.match(/token=([^;]+)/);
  const token = match ? match[1] : null;

  if (!token) {
    redirect("/login");
  }

  const payload = verifyJwt(token);

  if (!payload) {
    redirect("/login");
  }

  return <Dashboard />;
}