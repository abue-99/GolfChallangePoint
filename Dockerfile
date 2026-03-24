# ---- Build Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo

RUN corepack enable

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ \
 && rm -rf /var/lib/apt/lists/*

# Copy everything
COPY . .

# Install deps
RUN pnpm install --no-frozen-lockfile

# Prisma generate (WICHTIG!)
RUN pnpm --filter golf-challenge-point-web exec prisma generate

# Build app
RUN pnpm --filter golf-challenge-point-web run build


# ---- Runtime Stage ----
FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl \
 && rm -rf /var/lib/apt/lists/*

# Copy standalone output
COPY --from=build /repo/apps/web/.next/standalone ./
COPY --from=build /repo/apps/web/.next/static ./apps/web/.next/static
COPY --from=build /repo/apps/web/public ./apps/web/public

EXPOSE 3000

CMD ["node", "apps/web/server.js"]