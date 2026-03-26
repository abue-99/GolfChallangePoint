#!/usr/bin/env bash
# Golf ChallengePoint – First-time project setup
set -e

echo "⛳ Setting up Golf ChallengePoint..."

# Check prerequisites
command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required. Install from https://nodejs.org/"; exit 1; }
command -v pnpm >/dev/null 2>&1 || { echo "❌ pnpm is required. Install with: npm install -g pnpm"; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "❌ Docker is required. Install from https://docker.com/"; exit 1; }

# Copy environment file
if [ ! -f .env ]; then
  cp .env.example .env
  echo "✅ Created .env from .env.example – please fill in your secrets!"
else
  echo "✅ .env already exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Start the database
echo "🐘 Starting PostgreSQL..."
docker compose -f infra/docker-compose.yml up -d

# Wait for DB to be ready
echo "⏳ Waiting for database..."
sleep 5

# Run migrations
echo "🔄 Running Prisma migrations..."
pnpm --filter ./apps/web exec prisma migrate dev --name init

echo ""
echo "✅ Setup complete! Run 'bash scripts/dev.sh' to start the development server."
