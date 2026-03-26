#!/usr/bin/env bash
# Golf ChallengePoint – Run all tests
set -e

echo "⛳ Running tests..."

# Run API unit tests
echo "🧪 Running API unit tests..."
pnpm --filter ./apps/api test

echo "✅ All tests passed!"
