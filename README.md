# ⛳ Golf ChallengePoint

A modern, full-stack golf training management platform for players, coaches, and club administrators.

## Overview

Golf ChallengePoint enables golf clubs to manage players, assign coaches, schedule training sessions, and track performance through a structured task-log system.

### Tech Stack

| Layer        | Technology                       |
|--------------|----------------------------------|
| Frontend     | Next.js 15, React, Tailwind CSS  |
| Backend API  | NestJS (Node.js)                 |
| Database     | PostgreSQL + Prisma ORM          |
| Auth         | JWT (jsonwebtoken)               |
| Monorepo     | pnpm workspaces + Turborepo      |
| Deployment   | Docker / Docker Compose          |

## Project Structure

```
Golf-ChallengePoint/
├── apps/
│   ├── web/          # Next.js frontend + API routes
│   └── api/          # NestJS backend
├── docs/             # Project documentation
├── infra/            # Infrastructure & Docker
├── scripts/          # Build & utility scripts
├── .github/          # GitHub Actions & templates
└── packages/         # Shared packages (future)
```

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/) >= 10
- [Docker](https://www.docker.com/) (for database)

### 1. Clone & Install

```bash
git clone https://github.com/abue-99/Golf-ChallengePoint.git
cd Golf-ChallengePoint
pnpm install
```

### 2. Environment Setup

```bash
cp .env.example .env
# Edit .env with your settings
```

### 3. Start the Database

```bash
docker compose -f infra/docker-compose.yml up -d
```

### 4. Run Database Migrations

```bash
cd apps/web
pnpm prisma migrate dev
```

### 5. Start Development

```bash
pnpm dev
```

The app will be available at:
- **Frontend**: http://localhost:3000
- **API**: http://localhost:4000

## Available Scripts

| Command         | Description                      |
|-----------------|----------------------------------|
| `pnpm dev`      | Start all apps in dev mode       |
| `pnpm build`    | Build all apps for production    |
| `pnpm lint`     | Lint all apps                    |
| `pnpm format`   | Format code with Prettier        |
| `bash scripts/setup.sh`   | First-time project setup |
| `bash scripts/dev.sh`     | Start dev environment    |
| `bash scripts/build.sh`   | Build for production     |

## User Roles

| Role         | Permissions                                       |
|--------------|---------------------------------------------------|
| `PLAYER`     | View own schedule, log tasks                      |
| `COACH`      | Manage assigned players, create task templates    |
| `CLUBADMIN`  | Manage club members, coaches, and admins          |
| `SUPERADMIN` | Full system access                                |

## Documentation

- [Architecture Overview](./ARCHITECTURE.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [API Reference](./docs/API.md)
- [Database Schema](./docs/DATABASE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## License

MIT © Golf ChallengePoint
