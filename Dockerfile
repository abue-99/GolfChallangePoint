# ---- Build Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo

RUN corepack enable
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ curl \
 && rm -rf /var/lib/apt/lists/*

# Copy workspace
COPY . .

# Install ALL workspace deps (root)
RUN pnpm install --no-frozen-lockfile

# -----------------------------------------------------------
# 1️⃣ Prisma Client generieren – im KORREKTEN workspace!
# -----------------------------------------------------------
WORKDIR /repo/apps/web
RUN pnpm install
RUN pnpm exec prisma generate --schema=./prisma/schema.prisma
RUN pnpm run build              # <-- WICHTIG! KEIN FILTER!

# -----------------------------------------------------------
# 2️⃣ zurück zu repo root für next build
# -----------------------------------------------------------
WORKDIR /repo

# ---- Runtime Stage ----
FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl curl \
 && rm -rf /var/lib/apt/lists/*

# Standalone build output
COPY --from=build /repo/apps/web/.next/standalone ./
COPY --from=build /repo/apps/web/.next/static ./apps/web/.next/static
COPY --from=build /repo/apps/web/public ./apps/web/public

EXPOSE 3000
CMD ["node", "apps/web/server.js"]