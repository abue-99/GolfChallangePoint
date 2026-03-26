# Scripts

This folder contains utility scripts for the Golf ChallengePoint project.

## Development Scripts

| Script              | Description                              |
|---------------------|------------------------------------------|
| `setup.sh`          | First-time project setup                 |
| `dev.sh`            | Start development environment            |
| `build.sh`          | Build all apps for production            |
| `test.sh`           | Run all tests                            |

### Usage

```bash
# First-time setup
bash scripts/setup.sh

# Start development
bash scripts/dev.sh

# Build for production
bash scripts/build.sh

# Run tests
bash scripts/test.sh
```

## GitHub Automation Scripts

| Script                        | Description                              |
|-------------------------------|------------------------------------------|
| `gh_create_mvp_issues.sh`     | Create EPIC and Sprint issues via GitHub CLI |
| `bootstrap-mvp.sh`            | Bootstrap the MVP project structure      |
| `setup-github-templates.sh`   | Set up GitHub issue and PR templates     |

### GitHub CLI Requirements

- Install GitHub CLI: https://cli.github.com/
- Authenticate: `gh auth login`
- Permission to create issues in the target repo

### Usage

```bash
bash scripts/gh_create_mvp_issues.sh OWNER/REPO
```

The script will create:
- 1 EPIC issue
- Sprint issues S0–S3

