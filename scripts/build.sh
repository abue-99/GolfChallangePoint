#!/usr/bin/env bash
# Golf ChallengePoint – Build all apps for production
set -e

echo "⛳ Building Golf ChallengePoint..."

# Generate Prisma client
echo "🔄 Generating Prisma client..."
pnpm --filter ./apps/web exec prisma generate

# Build all apps
echo "🏗️  Building apps..."
pnpm build

echo "✅ Build complete!"
