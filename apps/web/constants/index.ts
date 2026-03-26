/**
 * App-wide constants for Golf ChallengePoint.
 */

// ---------------------------------------------------------------
// Routes
// ---------------------------------------------------------------

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  DASHBOARD: "/dashboard",
  PLAYER: "/player",
  COACH: "/coach",
  CLUB: "/club",
  CLUB_ADMINS: "/club/admins",
  SETTINGS: "/settings",
} as const;

// ---------------------------------------------------------------
// Auth
// ---------------------------------------------------------------

export const AUTH = {
  COOKIE_NAME: "token",
  TOKEN_EXPIRY_DAYS: 7,
} as const;

// ---------------------------------------------------------------
// User Roles
// ---------------------------------------------------------------

export const ROLES = {
  PLAYER: "PLAYER",
  COACH: "COACH",
  CLUBADMIN: "CLUBADMIN",
  SUPERADMIN: "SUPERADMIN",
} as const;

export const ROLE_LABELS: Record<string, string> = {
  PLAYER: "Player",
  COACH: "Coach",
  CLUBADMIN: "Club Admin",
  SUPERADMIN: "Super Admin",
};

// ---------------------------------------------------------------
// Task Categories
// ---------------------------------------------------------------

export const TASK_CATEGORIES = {
  APPROACH: "Approach",
  OTT: "Off the Tee",
  ARG: "Around the Green",
  PUTTING: "Putting",
} as const;

// ---------------------------------------------------------------
// Input Schemas
// ---------------------------------------------------------------

export const INPUT_SCHEMA_LABELS: Record<string, string> = {
  numeric_success: "Success Rate",
  numeric_score: "Numeric Score",
  text_reflection: "Text Reflection",
};

// ---------------------------------------------------------------
// API
// ---------------------------------------------------------------

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
