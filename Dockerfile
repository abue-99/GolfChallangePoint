# syntax=docker/dockerfile:1.7

FROM node:22-bookworm-slim AS base
WORKDIR /repo
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates openssl python3 make g++ && rm -rf /var/lib/apt/lists/*
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt
ADD https://registry.npmjs.org/pnpm/-/pnpm-11.25.0.tgz /tmp/pnpm.tgz
RUN mkdir -p /usr/local/lib/node_modules/pnpm \
 && tar -xzf /tmp/pnpm.tgz --strip-components=1 -C /usr/local/lib/node_modules/pnpm \
 && printf '#!/bin/sh\nexec node /usr/local/lib/node_modules/pnpm/bin/pnpm.cjs "$@"\n' > /usr/local/bin/pnpm \
 && chmod +x /usr/local/bin/pnpm \
 && printf '#!/bin/sh\nexec node /usr/local/lib/node_modules/pnpm/bin/pnpx.cjs "$@"\n' > /usr/local/bin/pnpx \
 && chmod +x /usr/local/bin/pnpx

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json tsconfig.base.json ./
COPY apps/api/package.json ./apps/api/package.json
COPY apps/web/package.json ./apps/web/package.json
COPY packages/db/package.json ./packages/db/package.json
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm config set store-dir /pnpm/store && \
    pnpm install --filter golf-challenge-point-web... --frozen-lockfile

FROM deps AS prisma
COPY packages/db/prisma ./packages/db/prisma
COPY packages/db/prisma.config.ts ./packages/db/prisma.config.ts
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm --filter @challengepoint/db run generate

FROM prisma AS build
COPY apps/web ./apps/web
COPY packages/db ./packages/db
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm --filter @challengepoint/db run build
RUN pnpm --filter golf-challenge-point-web run typecheck
RUN --mount=type=cache,id=next-cache,target=/repo/apps/web/.next/cache \
    pnpm --filter golf-challenge-point-web run build

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates openssl && rm -rf /var/lib/apt/lists/*
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt
COPY --from=build /repo/apps/web/.next/standalone /app
COPY --from=build /repo/apps/web/.next/static /app/apps/web/.next/static
COPY --from=build /repo/apps/web/public /app/apps/web/public
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD ["node", "apps/web/server.js"]
