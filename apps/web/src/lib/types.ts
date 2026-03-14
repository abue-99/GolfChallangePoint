export type InputSchema = "numeric_success" | "numeric_score" | "text_reflection";

export type TaskTemplate = {
  id: string;
  title: string;
  category: "APPROACH" | "OTT" | "ARG" | "PUTTING";
  inputSchema: InputSchema;
};

export type CalendarEvent = {
  id: string;
  playerId: string;
  templateId: string;
  start: string; // ISO
  end: string;   // ISO
  template?: TaskTemplate;
};
