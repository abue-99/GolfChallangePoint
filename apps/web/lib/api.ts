export const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

async function req(path: string, init?: RequestInit) {
  const res = await fetch(`${API}${path}`, { ...init, headers: { "Content-Type": "application/json", ...(init?.headers || {}) } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

export const api = {
  listTemplates: () => req("/task-templates"),
  listEvents: (playerId: string) => req(`/calendar/events?playerId=${playerId}`),
  createEvent: (payload: any) => req("/calendar/events", { method: "POST", body: JSON.stringify(payload) }),
  updateEvent: (id: string, payload: any) => req(`/calendar/events/${id}`, { method: "PATCH", body: JSON.stringify(payload) }),
  createLog: (payload: any) => req("/task-logs", { method: "POST", body: JSON.stringify(payload) }),
};
