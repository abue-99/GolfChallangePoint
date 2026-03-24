# ---- Build Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo

RUN corepack enable

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ \
 && rm -rf /var/lib/apt/lists/*

# Copy all files into build container
COPY . .

# Install workspace dependencies
RUN pnpm install --no-frozen-lockfile

# Generate Prisma Client
RUN pnpm --filter golf-challenge-point-web exec prisma generate

# Build Next.js app (Standalone Output)
RUN pnpm --filter golf-challenge-point-web run build



# ---- Runtime Stage ----
FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl \
 && rm -rf /var/lib/apt/lists/*

# ✅ Copy Next.js standalone server bundle
COPY --from=build /repo/apps/web/.next/standalone ./

# ✅ Copy Next.js required static assets
COPY --from=build /repo/apps/web/.next/static ./apps/web/.next/static

# ✅ Public folder
COPY --from=build /repo/apps/web/public ./apps/web/public

# ✅ Copy API routes (App Router!)
COPY --from=build /repo/apps/web/src ./apps/web/src

# ✅ Copy ALL node_modules (incl. prisma client + bcryptjs)
COPY --from=build /repo/node_modules ./node_modules


EXPOSE 3000

# ✅ Start standalone Next.js
CMD ["node", "apps/web/server.js"]