#!/usr/bin/env bash
# Golf ChallengePoint – Start development environment
set -e

echo "⛳ Starting Golf ChallengePoint development environment..."

# Ensure DB is running
docker compose -f infra/docker-compose.yml up -d

# Start all apps with Turborepo
pnpm dev
