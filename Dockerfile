# ---- Build Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo

RUN corepack enable

# Install OS dependencies for prisma/bcrypt/etc.
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ \
 && rm -rf /var/lib/apt/lists/*

COPY . .

RUN pnpm install --frozen-lockfile

# ✅ Prisma generate (im richtigen Package!)
RUN pnpm --filter @golf/db exec prisma generate

# ✅ Build Next.js app with standalone output
RUN pnpm --filter golf-challenge-point-web run build


# ---- Runtime Stage ----
FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl \
 && rm -rf /var/lib/apt/lists/*

# ✅ Standalone server
COPY --from=build /repo/apps/web/.next/standalone ./

# ✅ Static assets in correct path
COPY --from=build /repo/apps/web/.next/static ./.next/static

# ✅ Public folder (needed for static resources)
COPY --from=build /repo/apps/web/public ./public

EXPOSE 3000

CMD ["node", "server.js"]