// prisma.config.ts
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  // 👇 Hier kommt die DB-URL hin (statt in schema.prisma)
  datasource: {
    url: process.env.DATABASE_URL!,       // z.B. postgres://user:pass@localhost:5432/dbname
    // optional: shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL,
  },
});