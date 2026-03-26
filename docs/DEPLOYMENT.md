# Deployment Guide

## Docker Compose (Recommended)

The simplest way to run Golf ChallengePoint in production.

### Prerequisites

- Docker >= 24
- Docker Compose >= 2

### 1. Configure Environment

```bash
cp .env.example .env
# Edit .env with production values:
#   - DATABASE_URL
#   - JWT_SECRET (use openssl rand -base64 32)
#   - SENDGRID_API_KEY
#   - NEXT_PUBLIC_API_URL
```

### 2. Build & Start

```bash
docker compose up -d --build
```

This starts:
- **web** app on port 80 (and 3000)
- **db** PostgreSQL on port 5432 (internal)

### 3. Run Migrations

```bash
docker compose exec web pnpm --filter ./apps/web prisma migrate deploy
```

### 4. Access the App

Open http://localhost (or your server IP).

---

## Manual Deployment

### Build

```bash
pnpm install --frozen-lockfile
pnpm --filter ./apps/web exec prisma generate
pnpm build
```

### Start

```bash
# Web app
node apps/web/.next/standalone/server.js

# API
node apps/api/dist/main.js
```

---

## Infrastructure Files

| File                          | Purpose                              |
|-------------------------------|--------------------------------------|
| `docker-compose.yml`          | Production compose file              |
| `infra/docker-compose.yml`    | Development database only            |
| `infra/docker/Dockerfile.web` | Web app Docker image                 |
| `infra/docker/Dockerfile.api` | API Docker image                     |
| `Dockerfile`                  | Root multi-stage build (web)         |

---

## Environment Variables for Production

| Variable              | Required | Description                              |
|-----------------------|----------|------------------------------------------|
| `DATABASE_URL`        | ✅       | PostgreSQL connection string             |
| `JWT_SECRET`          | ✅       | JWT signing secret (min. 32 chars)       |
| `NEXT_PUBLIC_API_URL` | ✅       | NestJS API URL (public-facing)           |
| `SENDGRID_API_KEY`    | ✅       | Email service for password reset         |
| `EMAIL_FROM`          | ✅       | Sender address for emails                |
| `NODE_ENV`            | ✅       | Set to `production`                      |
| `PORT`                | ❌       | Web app port (default: 3000)             |
| `API_PORT`            | ❌       | API port (default: 4000)                 |

---

## Health Checks

- **Web**: `GET /api/health` (or check home page redirect)
- **API**: `GET /` returns `"Hello World!"`
- **Database**: PostgreSQL healthcheck in docker-compose.yml

---

## Backups

Back up the PostgreSQL volume regularly:

```bash
docker exec golfchallangepoint-db-1 \
  pg_dump -U postgres challengenpoint > backup_$(date +%Y%m%d).sql
```
