# ---- Build Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo

RUN corepack enable
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ curl \
 && rm -rf /var/lib/apt/lists/*

# Copy workspace
COPY . .

# Install root deps (pnpm workspace)
RUN pnpm install --no-frozen-lockfile

# ---------------------------------------------
# 1️⃣ Prisma Client im richtigen Workspace generieren
# ---------------------------------------------
WORKDIR /repo/apps/web
RUN pnpm install
RUN pnpm exec prisma generate

# ---------------------------------------------
# 2️⃣ Jetzt wieder zur Root zurückwechseln
# ---------------------------------------------
WORKDIR /repo

# ---------------------------------------------
# 3️⃣ Build NUR das Web-Projekt
# ---------------------------------------------
RUN pnpm --filter ./apps/web... run build

# ---- Runtime Stage ----
FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable \
 && apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl curl \
 && rm -rf /var/lib/apt/lists/*

COPY --from=build /repo/apps/web/.next/standalone ./
COPY --from=build /repo/apps/web/.next/static ./apps/web/.next/static
COPY --from=build /repo/apps/web/public ./apps/web/public

EXPOSE 3000
CMD ["node", "apps/web/server.js"]