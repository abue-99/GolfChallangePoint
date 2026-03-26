#!/usr/bin/env bash
set -euo pipefail

# 1) Root-Struktur
mkdir -p apps packages shared prisma infra .github/ISSUE_TEMPLATE scripts

# 2) Root-Dateien
cat > pnpm-workspace.yaml <<'YAML'
packages:
  - "apps/*"
  - "packages/*"
  - "shared/*"
YAML

cat > package.json <<'JSON'
{
  "name": "challangepoint-mvp",
  "private": true,
  "packageManager": "pnpm@10.32.1",
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "format": "prettier --write ."
  },
  "devDependencies": {
    "prettier": "^3.3.3",
    "turbo": "^2.0.0"
  }
}
JSON

cat > turbo.json <<'JSON'
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "dev": { "cache": false, "persistent": true },
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "lint": { "outputs": [] }
  }
}
JSON

cat > tsconfig.base.json <<'JSON'
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@shared/*": ["shared/*"],
      "@packages/*": ["packages/*"]
    },
    "types": ["node"],
    "skipLibCheck": true
  }
}
JSON

cat > .gitignore <<'GIT'
node_modules
.next
dist
.env
pnpm-lock.yaml
.DS_Store
coverage
GIT

cat > .env.example <<'ENV'
# Database
DATABASE_URL="postgresql://app:app@localhost:5432/app"
ENV

# 3) Docker-Compose (Postgres)
mkdir -p infra
cat > infra/docker-compose.yml <<'YAML'
version: "3.9"
services:
  db:
    image: postgres:16
    restart: unless-stopped
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app
      POSTGRES_DB: app
    ports:
      - "5432:5432"
    volumes:
      - dbdata:/var/lib/postgresql/data
volumes:
  dbdata:
YAML

# 4) Prisma Schema (Root)
mkdir -p prisma
cat > prisma/schema.prisma <<'PRISMA'
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  ADMIN
  COACH
  PLAYER
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(PLAYER)
  createdAt DateTime @default(now())
  PlayerProfile      PlayerProfile?
  CoachPlayerLinks   CoachPlayerLink[] @relation("CoachLinks")
}

model PlayerProfile {
  id        String @id @default(cuid())
  userId    String @unique
  user      User   @relation(fields: [userId], references: [id])
}

model CoachPlayerLink {
  id        String @id @default(cuid())
  coachId   String
  playerId  String
  coach     User   @relation("CoachLinks", fields: [coachId], references: [id])
  player    User   @relation(fields: [playerId], references: [id])
}

enum TaskCategory {
  APPROACH
  OTT
  ARG
  PUTTING
}

enum InputSchema {
  numeric_success
  numeric_score
  text_reflection
}

model TaskTemplate {
  id          String       @id @default(cuid())
  title       String
  category    TaskCategory
  inputSchema InputSchema
  createdById String?
  createdBy   User?        @relation(fields: [createdById], references: [id])
}

model CalendarEvent {
  id           String   @id @default(cuid())
  playerId     String
  templateId   String
  start        DateTime
  end          DateTime
  createdById  String
  player       User     @relation(fields: [playerId], references: [id])
  template     TaskTemplate @relation(fields: [templateId], references: [id])
  createdBy    User     @relation(fields: [createdById], references: [id])
  TaskLogs     TaskLog[]
}

model TaskLog {
  id         String   @id @default(cuid())
  eventId    String
  type       InputSchema
  attempts   Int?
  successes  Int?
  score      Float?
  text       String?
  createdAt  DateTime @default(now())
  event      CalendarEvent @relation(fields: [eventId], references: [id])
}
PRISMA

# 5) Install root tool deps
pnpm install

# 6) apps/web: Next.js (TS, Tailwind)
mkdir -p apps
cd apps
pnpm dlx create-next-app@latest web --typescript --eslint --app --src-dir --tailwind --use-pnpm --no-import-alias
cd web
# optional: set English default, minimal home
cat > src/app/page.tsx <<'TSX'
export default function HomePage() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-slate-50">
      <div className="p-8 rounded-xl bg-white shadow">
        <h1 className="text-2xl font-semibold">Challangepoint MVP</h1>
        <p className="mt-2 text-slate-600">Next.js UI is running. API follows on :4000.</p>
      </div>
    </main>
  );
}
TSX

# 7) apps/api: NestJS (TS)
cd ..
pnpm dlx @nestjs/cli new api --package-manager pnpm --skip-git
cd api
# Align tsconfig
cat > tsconfig.json <<'JSON'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*", "src/**/*.ts"]
}
JSON

# add a simple health endpoint
mkdir -p src
cat > src/app.module.ts <<'TS'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
})
export class AppModule {}
TS

cat > src/app.controller.ts <<'TS'
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return { ok: true };
  }
}
TS

cat > src/main.ts <<'TS'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT ?? 4000;
  await app.listen(port);
  console.log(`API listening on http://localhost:${port}`);
}
bootstrap();
TS

# ensure "dev" script exists for turbo
jq '.scripts.dev="nest start --watch"' package.json > package.json.tmp && mv package.json.tmp package.json || true

cd ../..

echo "✅ Bootstrap done. Next steps:"
echo "1) Start DB:   docker compose -f infra/docker-compose.yml up -d"
echo "2) Copy env:   cp .env.example .env"
echo "3) Install Prisma deps at root: pnpm add -D prisma && pnpm add @prisma/client"
echo "4) Generate & migrate: pnpm dlx prisma generate && pnpm dlx prisma migrate dev --name init"
echo "5) Dev start:  pnpm dev"
``