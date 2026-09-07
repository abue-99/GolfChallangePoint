# syntax=docker/dockerfile:1.7

FROM node:22-bookworm-slim AS base
WORKDIR /app
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
ARG PNPM_TGZ_SHA256=33dd0748f27e7916c4f1c8b6943461983e3453b06bbda6312a6280130b4881e5
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates openssl python3 make g++ && rm -rf /var/lib/apt/lists/*
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt
ADD https://registry.npmjs.org/pnpm/-/pnpm-11.25.0.tgz /tmp/pnpm.tgz
RUN mkdir -p /usr/local/lib/node_modules/pnpm \
 && echo "$PNPM_TGZ_SHA256  /tmp/pnpm.tgz" | sha256sum -c - \
 && tar -xzf /tmp/pnpm.tgz --strip-components=1 -C /usr/local/lib/node_modules/pnpm \
 && printf '#!/bin/sh\nexec node /usr/local/lib/node_modules/pnpm/bin/pnpm.cjs "$@"\n' > /usr/local/bin/pnpm \
 && chmod +x /usr/local/bin/pnpm \
 && printf '#!/bin/sh\nexec node /usr/local/lib/node_modules/pnpm/bin/pnpx.cjs "$@"\n' > /usr/local/bin/pnpx \
 && chmod +x /usr/local/bin/pnpx

FROM base AS manifests
COPY . .
RUN mkdir -p /tmp/manifests && \
    cp package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json tsconfig.base.json /tmp/manifests/ && \
    find apps packages -name package.json -exec sh -c 'for file do mkdir -p "/tmp/manifests/$(dirname "$file")"; cp "$file" "/tmp/manifests/$file"; done' sh {} +

FROM base AS deps
COPY --from=manifests /tmp/manifests/ ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm config set store-dir /pnpm/store && \
    pnpm install --filter api... --frozen-lockfile

FROM deps AS prisma
COPY packages/db/prisma ./packages/db/prisma
COPY packages/db/prisma.config.ts ./packages/db/prisma.config.ts
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm --filter @challengepoint/db run generate

FROM prisma AS builder
COPY apps/api ./apps/api
COPY packages/db ./packages/db
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm --filter @challengepoint/db run build
RUN pnpm --filter api run build

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ARG PNPM_TGZ_SHA256=33dd0748f27e7916c4f1c8b6943461983e3453b06bbda6312a6280130b4881e5
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates openssl && rm -rf /var/lib/apt/lists/*
ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt
ADD https://registry.npmjs.org/pnpm/-/pnpm-11.25.0.tgz /tmp/pnpm.tgz
RUN mkdir -p /usr/local/lib/node_modules/pnpm \
 && echo "$PNPM_TGZ_SHA256  /tmp/pnpm.tgz" | sha256sum -c - \
 && tar -xzf /tmp/pnpm.tgz --strip-components=1 -C /usr/local/lib/node_modules/pnpm \
 && printf '#!/bin/sh\nexec node /usr/local/lib/node_modules/pnpm/bin/pnpm.cjs "$@"\n' > /usr/local/bin/pnpm \
 && chmod +x /usr/local/bin/pnpm \
 && printf '#!/bin/sh\nexec node /usr/local/lib/node_modules/pnpm/bin/pnpx.cjs "$@"\n' > /usr/local/bin/pnpx \
 && chmod +x /usr/local/bin/pnpx
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=builder /app/apps/api/package.json ./apps/api/package.json
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/packages/db/package.json ./packages/db/package.json
COPY --from=builder /app/packages/db/index.js ./packages/db/index.js
COPY --from=builder /app/packages/db/index.d.ts ./packages/db/index.d.ts
COPY --from=builder /app/packages/db/db.js ./packages/db/db.js
COPY --from=builder /app/packages/db/db.d.ts ./packages/db/db.d.ts
COPY --from=builder /app/packages/db/generated ./packages/db/generated
COPY --from=builder /app/packages/db/prisma ./packages/db/prisma
COPY --from=builder /app/packages/db/prisma.config.ts ./packages/db/prisma.config.ts
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=builder /app/packages/db/node_modules ./packages/db/node_modules
EXPOSE 4000
CMD ["sh", "-c", "cd /app/packages/db && node_modules/.bin/prisma migrate resolve --rolled-back 20260413100000_fix_coach_player_links_cascade 2>/dev/null || true && cd /app && pnpm --filter @challengepoint/db run migrate:deploy && node apps/api/dist/main.js"]
