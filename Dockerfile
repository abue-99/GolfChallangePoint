# ---- build stage ----
FROM node:22-bookworm-slim AS build
WORKDIR /app

# Optional: Systemabhängigkeiten, falls native Addons im Projekt sind
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl python3 make g++ \
 && rm -rf /var/lib/apt/lists/*

# Nur package-Dateien kopieren (Cache-freundlich)
COPY package*.json ./

# Mit/ohne Lockfile zurechtkommen
RUN if [ -f package-lock.json ]; then \
      npm ci --omit=dev; \
    else \
      npm install --omit=dev; \
    fi

# Restlichen Code (inkl. prisma/) kopieren
COPY . .

# Prisma Client bauen (benötigt kein DB-Connect)
RUN npx prisma generate

# ---- runtime stage ----
FROM node:22-bookworm-slim
WORKDIR /app

ENV NODE_ENV=production
# dieselben Systemlibs, falls Runtime Addons/Prisma sie benötigen
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates openssl \
 && rm -rf /var/lib/apt/lists/*

COPY --from=build /app /app

EXPOSE 3000
# Start: ggf. Migration + App-Start (wenn du migrations nutzt)
CMD [ "sh", "-c", "npx prisma migrate deploy || true; npm start" ]