FROM node:22-bookworm-slim AS builder

WORKDIR /app

RUN corepack enable

# Install OS dependencies
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates openssl python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build Next.js app
RUN pnpm --filter golf-challenge-point-web run build

# Production stage
FROM node:22-bookworm-slim

WORKDIR /app

RUN corepack enable

# Install only runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/package.json ./apps/web/package.json
COPY --from=builder /app/package.json ./package.json

WORKDIR /app/apps/web

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node_modules/.bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]
