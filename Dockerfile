# ---- Build Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo

RUN corepack enable

# Install OS dependencies for prisma/bcrypt/etc.
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates openssl python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY . .

# Create .env file for Prisma if it doesn't exist
RUN if [ ! -f packages/db/.env ]; then cp packages/db/.env.example packages/db/.env; fi

RUN pnpm install --frozen-lockfile

# ✅ Generate Prisma client (without needing DB connection)
RUN pnpm --filter @golf/db run generate

# ✅ Build Next.js app with standalone output
RUN pnpm --filter golf-challenge-point-web run build


# ---- Runtime Stage ----
FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

ARG DEPLOYMENT_MODE=standalone
ENV DEPLOYMENT_MODE=${DEPLOYMENT_MODE}

RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends ca-certificates openssl && rm -rf /var/lib/apt/lists/*

# ✅ Standalone server
COPY --from=build /repo/apps/web/.next/standalone /app

# ✅ Static assets
COPY --from=build /repo/apps/web/.next/static /app/apps/web/.next/static

# ✅ Public folder (needed for static resources)
COPY --from=build /repo/apps/web/public /app/apps/web/public

# ✅ Optional: copy full .next in dev mode for hot-reload
RUN if [ "${DEPLOYMENT_MODE}" = "dev" ]; then \
    cp -r /app/apps/web/.next /app/.next; \
    fi

EXPOSE 3000

CMD ["node", "apps/web/server.js"]
