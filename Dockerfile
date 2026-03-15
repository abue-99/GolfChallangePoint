# ---- Build-Stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /repo
RUN corepack enable
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ curl \
 && rm -rf /var/lib/apt/lists/*

# Ganzes Repo kopieren (dank .dockerignore bleibt's schlank)
COPY . .

# Install (Lockfile wird genutzt, aber nicht strikt erzwungen)
RUN pnpm install

# Prisma Client generieren (Root oder apps/web – je nach Setup)
RUN npx prisma generate || true
# Falls Prisma nur in apps/web liegt:
# RUN cd apps/web && npx prisma generate

# Nur die Web-App bauen
RUN pnpm --filter ./apps/web... run build

# ---- Runtime-Stage ----
FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl curl \
 && rm -rf /var/lib/apt/lists/*

COPY --from=build /repo /app
WORKDIR /app/apps/web

EXPOSE 3000
CMD ["sh","-c","npx prisma migrate deploy || true; pnpm start"]