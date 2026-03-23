import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyJwt } from "@/lib/jwt";
import Dashboard from "./(app)/dashboard/page";

export default function HomePage() {
  const token = cookies().get("token")?.value;

  // Kein Token → redirect zu Login
  if (!token) {
    redirect("/login");
  }

  // Token da → prüfen
  const payload = verifyJwt(token);

  // ungültiger Token → redirect
  if (!payload) {
    redirect("/login");
  }

  // Token OK → Dashboard anzeigen
  return <Dashboard />;
}