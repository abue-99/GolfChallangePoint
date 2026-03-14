import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockPlayers = [
  { id: "player_1", name: "Alex Johnson" },
  { id: "player_2", name: "Jamie Lee" },
];

export default function PlayersPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Players</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockPlayers.map((p) => (
          <Card key={p.id} className="p-4">
            <div className="mb-2 font-medium">{p.name}</div>
            <Button asChild>
              <Link href={`/coach/players/${p.id}/calendar`}>Open Calendar</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
