# GitHub Automation (optional)

This folder contains an optional helper script to create the EPIC + Sprint issues using GitHub CLI.

## Requirements
- Install GitHub CLI: https://cli.github.com/
- Authenticate: `gh auth login`
- Permission to create issues in the target repo

## Usage
From the repo root:
```bash
bash scripts/gh_create_mvp_issues.sh OWNER/REPO
```

The script will create:
- 1 EPIC issue
- Sprint issues S0–S3

You can then assign milestones, add to GitHub Projects, and refine acceptance criteria.
