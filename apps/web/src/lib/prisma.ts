import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// 👉 WICHTIG: verhindern, dass Prisma beim Build läuft
const isBuild = process.env.NEXT_PHASE === "phase-production-build";

export const prisma = isBuild
  ? ({} as PrismaClient) // 🚫 Fake Client beim Build
  : globalForPrisma.prisma ??
    new PrismaClient({
      log: ["error", "warn"],
    });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}