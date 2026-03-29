export { PrismaClient, Prisma } from './generated/client/index.js';
export type { Role } from './generated/client/index.js';

import { PrismaClient } from './generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const isBuild = process.env.NEXT_PHASE === 'phase-production-build';

let adapter: any;
try {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  }) as any;
  adapter = new PrismaPg(pool);
} catch (e) {
  console.error('Failed to create Prisma adapter:', e);
  adapter = undefined;
}

export const prisma = isBuild
  ? ({} as PrismaClient)
  : globalForPrisma.prisma ??
    new PrismaClient({
      ...(adapter ? { adapter } : {}),
      log: ['error', 'warn'],
    });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
