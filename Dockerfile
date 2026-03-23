# ---- Build Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo

RUN corepack enable
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ curl \
 && rm -rf /var/lib/apt/lists/*

# Copy workspace
COPY . .

# Install workspace deps
RUN pnpm install --no-frozen-lockfile

# Generate Prisma client (if needed)
RUN npx prisma generate || true

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

# Copy only necessary runtime output from the build stage:
# 1) Standalone production bundle
COPY --from=build /repo/apps/web/.next/standalone ./  
# 2) Static assets
COPY --from=build /repo/apps/web/.next/static ./apps/web/.next/static
# 3) Public folder
COPY --from=build /repo/apps/web/public ./apps/web/public

EXPOSE 3000

CMD ["node", "apps/web/server.js"]