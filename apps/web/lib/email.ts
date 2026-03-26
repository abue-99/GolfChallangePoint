import { Resend } from "resend";

const isBuild = process.env.NEXT_PHASE === "phase-production-build";

export const resend = isBuild
  ? ({} as Resend) // 🚫 fake beim build
  : new Resend(process.env.RESEND_API_KEY);