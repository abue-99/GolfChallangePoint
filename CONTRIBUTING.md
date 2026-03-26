# Contributing to Golf ChallengePoint

Thank you for contributing! Please read this guide before submitting a PR.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `pnpm install`
3. Copy environment variables: `cp .env.example .env`
4. Start the database: `docker compose -f infra/docker-compose.yml up -d`
5. Run migrations: `cd apps/web && pnpm prisma migrate dev`
6. Start dev: `pnpm dev`

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

Types: feat | fix | docs | style | refactor | test | chore | perf | ci
Scope: web | api | infra | docs (optional)

Examples:
  feat(web): add password visibility toggle to login form
  fix(api): correct club admin permission check
  docs: update architecture overview
  chore: update dependencies
```

### Commit Rules
- Use the **imperative mood** in the subject line ("add" not "added")
- Don't capitalize the first letter after the colon
- No period at the end of the subject line
- Keep the subject line under 72 characters

## Branching Strategy

```
main          ← production-ready code
  └── develop ← integration branch
        ├── feat/short-description
        ├── fix/short-description
        └── chore/short-description
```

## Pull Request Process

1. Create a branch from `develop`: `git checkout -b feat/my-feature develop`
2. Make your changes with proper commits
3. Run lint and tests: `pnpm lint && pnpm test` (if tests exist)
4. Push and open a PR against `develop`
5. Fill in the PR template completely
6. Request review from at least one team member

## Code Style

- **TypeScript**: Use strict types; avoid `any` where possible
- **Formatting**: Prettier (configured in `.prettierrc`)
- **Linting**: ESLint (configured per app)
- **Naming**:
  - Components: `PascalCase`
  - Functions/variables: `camelCase`
  - Constants: `UPPER_SNAKE_CASE`
  - Files: `kebab-case.ts` or `PascalCase.tsx`

## Testing

- Write tests for new features and bug fixes
- Unit tests: `pnpm test` (per app)
- E2E tests: `pnpm test:e2e` (NestJS API)

## Security

- Never commit secrets or API keys
- Always validate and sanitize user input
- Follow OWASP guidelines for authentication
- Report security vulnerabilities privately to the maintainers

## Questions?

Open a GitHub Discussion or create an issue.
