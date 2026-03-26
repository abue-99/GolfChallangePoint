# Architecture Overview

## System Design

Golf ChallengePoint is a monorepo containing two main applications:

1. **`apps/web`** – Next.js 15 full-stack application (frontend + BFF API routes)
2. **`apps/api`** – NestJS REST API (backend services)

### High-Level Architecture

```
Browser
  │
  ▼
apps/web (Next.js – Port 3000)
  ├── /app/(public)/   → Public pages (login, signup)
  ├── /app/(app)/      → Protected pages (dashboard, player, coach, club)
  ├── /app/auth/       → BFF auth routes (login, signup, me, forgot, reset)
  ├── /app/api/        → BFF API proxies / route handlers
  ├── /lib/            → Utilities (prisma, jwt, api client)
  ├── /hooks/          → Custom React hooks
  ├── /services/       → Client-side API service layer
  ├── /types/          → Shared TypeScript types
  └── /constants/      → App-wide constants
  │
  ▼ (internal DB calls via Prisma)
PostgreSQL (Port 5432)
  │
  ▼ (REST API calls)
apps/api (NestJS – Port 4000)
  ├── /src/modules/    → Feature modules (auth, users, clubs, calendar, tasks)
  ├── /src/common/     → Guards, filters, interceptors, decorators
  ├── /src/config/     → Configuration (database, jwt, app)
  └── /src/database/   → Database connection module
```

## Data Flow

### Authentication Flow

```
1. User submits login form (apps/web/app/(public)/login)
2. POST /api/auth/login → apps/web/app/api/auth/login/route.ts
3. Prisma query → PostgreSQL (verify user + bcrypt)
4. Sign JWT → return token in cookie
5. Middleware validates cookie on protected routes
```

### Task Logging Flow

```
1. Coach schedules event (CalendarEvent) for a player
2. Player views calendar (apps/web/app/(app)/player)
3. Player logs task result (TaskLog)
4. Logs stored via apps/api REST endpoint or Next.js BFF
```

## Key Technical Decisions

### JWT Authentication
- Tokens stored as **HttpOnly cookies** for security (not localStorage)
- 7-day expiry with SameSite=Lax setting
- Middleware validates token presence on protected routes
- Secret loaded from `JWT_SECRET` environment variable

### Database (Prisma + PostgreSQL)
- Prisma ORM with PostgreSQL adapter
- Schema lives in `apps/web/prisma/schema.prisma`
- Generated client output in `apps/web/prisma/generated/`
- Singleton pattern for Prisma client in production

### Monorepo (pnpm + Turborepo)
- `pnpm workspaces` manages dependencies across apps
- Turborepo pipelines: `dev`, `build`, `lint`
- Shared config via `tsconfig.base.json`

### Role-Based Access Control
Roles are defined as Prisma enums:
- `PLAYER` – Standard golf player
- `COACH` – Golf coach with player management
- `CLUBADMIN` – Club administrator
- `SUPERADMIN` – System administrator

## Module Structure

### Web App (`apps/web`)

```
apps/web/
├── app/
│   ├── (public)/          # Unauthenticated pages
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   └── reset-password/
│   ├── (app)/             # Authenticated pages
│   │   ├── dashboard/
│   │   ├── player/
│   │   ├── coach/
│   │   ├── club/
│   │   └── settings/
│   ├── auth/              # BFF Auth API routes
│   │   ├── login/
│   │   ├── signup/
│   │   ├── me/
│   │   ├── forgot/
│   │   └── reset/
│   └── api/               # BFF API routes
│       └── club/
├── components/
│   ├── ui/                # shadcn/ui primitives
│   ├── layout/            # Layout components
│   └── auth/              # Auth-specific components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and clients
├── services/              # API service layer
├── types/                 # TypeScript type definitions
└── constants/             # App-wide constants
```

### API App (`apps/api`)

```
apps/api/
├── src/
│   ├── modules/           # Feature modules
│   │   ├── auth/
│   │   ├── users/
│   │   ├── clubs/
│   │   ├── calendar/
│   │   └── tasks/
│   ├── common/            # Shared utilities
│   │   ├── guards/
│   │   ├── filters/
│   │   ├── interceptors/
│   │   └── decorators/
│   ├── config/            # Configuration
│   └── database/          # Database module
└── test/
```

## Environment Variables

See [`.env.example`](./.env.example) for all required environment variables.

Key variables:
- `DATABASE_URL` – PostgreSQL connection string
- `JWT_SECRET` – Secret for signing JWTs (min. 32 chars in production)
- `NEXT_PUBLIC_API_URL` – NestJS API base URL
- `SENDGRID_API_KEY` – Email service for password reset
