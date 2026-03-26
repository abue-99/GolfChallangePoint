/**
 * Shared TypeScript type definitions for the Golf ChallengePoint web app.
 *
 * Types related to Prisma models are kept here for use across
 * components, services, and hooks without importing Prisma directly.
 */

// ---------------------------------------------------------------
// Enums
// ---------------------------------------------------------------

export type Role = "PLAYER" | "COACH" | "CLUBADMIN" | "SUPERADMIN";

export type TaskCategory = "APPROACH" | "OTT" | "ARG" | "PUTTING";

export type InputSchema = "numeric_success" | "numeric_score" | "text_reflection";

// ---------------------------------------------------------------
// User
// ---------------------------------------------------------------

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage?: string | null;
  role: Role;
  clubId?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

// ---------------------------------------------------------------
// Club
// ---------------------------------------------------------------

export type Club = {
  id: string;
  name: string;
  logo?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

// ---------------------------------------------------------------
// Task Template
// ---------------------------------------------------------------

export type TaskTemplate = {
  id: string;
  title: string;
  category: TaskCategory;
  inputSchema: InputSchema;
  createdById?: string | null;
};

// ---------------------------------------------------------------
// Calendar Event
// ---------------------------------------------------------------

export type CalendarEvent = {
  id: string;
  playerId: string;
  templateId: string;
  start: string; // ISO 8601
  end: string; // ISO 8601
  createdById: string;
  template?: TaskTemplate;
};

// ---------------------------------------------------------------
// Task Log
// ---------------------------------------------------------------

export type TaskLog = {
  id: string;
  eventId: string;
  type: InputSchema;
  attempts?: number | null;
  successes?: number | null;
  score?: number | null;
  text?: string | null;
  createdAt: string;
};

// ---------------------------------------------------------------
// API Responses
// ---------------------------------------------------------------

export type ApiError = {
  error: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};
