# ---- Build Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo

RUN corepack enable
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ curl \
 && rm -rf /var/lib/apt/lists/*

# Copy workspace
COPY . .

# Install all workspace deps at root
RUN pnpm install --no-frozen-lockfile

# ---------------------------------------------
# 🔥 Move into the web workspace BEFORE Prisma!
# ---------------------------------------------
WORKDIR /repo/apps/web

# Install web-local deps (important for @prisma/client)
RUN pnpm install

# Generate Prisma Client from apps/web/prisma/schema.prisma
RUN pnpm exec prisma generate

# ---------------------------------------------
# Go back to repo root for build filtering
# ---------------------------------------------
WORKDIR /repo

# Build ONLY web app in standalone mode
RUN pnpm --filter ./apps/web... run build

# ---- Runtime Stage ----
FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable \
 && apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl curl \
 && rm -rf /var/lib/apt/lists/*

# Standalone bundle
COPY --from=build /repo/apps/web/.next/standalone ./
# Static assets
COPY --from=build /repo/apps/web/.next/static ./apps/web/.next/static
# Public folder
COPY --from=build /repo/apps/web/public ./apps/web/public

EXPOSE 3000

CMD ["node", "apps/web/server.js"]