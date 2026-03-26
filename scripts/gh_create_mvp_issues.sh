#!/usr/bin/env bash
set -euo pipefail

# Creates the EPIC + Sprint issues via GitHub CLI (gh).
#
# Usage:
#   bash scripts/gh_create_mvp_issues.sh OWNER/REPO
#
# Requirements:
#   - Install GitHub CLI: https://cli.github.com/
#   - Authenticate: gh auth login
#   - You must have permission to create issues in the repo

REPO="${1:-}"
if [[ -z "$REPO" ]]; then
  echo "Usage: $0 OWNER/REPO"
  exit 1
fi

echo "Creating labels (safe to re-run)..."
create_label () {
  local name="$1"
  local color="$2"
  local desc="$3"
  gh label create "$name" --repo "$REPO" --color "$color" --description "$desc" 2>/dev/null || true
}

create_label "epic" "5319e7" "Epic tracking issue"
create_label "mvp" "0e8a16" "Minimum viable product"
create_label "user-story" "fbca04" "User story"
create_label "infra" "1d76db" "Infrastructure"
create_label "db" "006b75" "Database"
create_label "auth" "d4c5f9" "Authentication/Authorization"
create_label "api" "0052cc" "Backend/API"
create_label "web" "c2e0c6" "Frontend/Web"
create_label "calendar" "fef2c0" "Calendar"
create_label "drag-drop" "bfdadc" "Drag & drop"
create_label "tasks" "f9d0c4" "Tasks/Templates"
create_label "player" "c5def5" "Player experience"
create_label "coach" "b60205" "Coach experience"
create_label "logging" "d93f0b" "Logging/Tracking"
create_label "import" "0b1f3a" "Import/Integration"
create_label "ci" "000000" "CI/CD"

echo "Preparing EPIC body from template (removing YAML front matter)..."
EPIC_BODY="$(awk 'BEGIN{fm=0} /^---$/ {fm++; next} fm>=2 {print}' .github/ISSUE_TEMPLATE/epic_challangepoint_mvp.md)"

create_issue () {
  local title="$1"
  local body="$2"
  local labels="$3"
  gh issue create --repo "$REPO" --title "$title" --body "$body" --label "$labels"
}

echo "Creating EPIC + Sprint issues..."
create_issue "EPIC: Challangepoint MVP (Web + API) — Calendar + Drag&Drop + Player Logging (English UI)" "$EPIC_BODY" "epic,mvp"

create_issue "S0-01 Monorepo scaffold (pnpm + turborepo)" "Create monorepo with apps/web (Next.js) + apps/api (NestJS) + packages/shared. Ensure pnpm dev runs both." "mvp,infra"
create_issue "S0-02 Postgres docker-compose" "Add infra/docker-compose.yml with Postgres. API connects via DATABASE_URL." "db,infra"
create_issue "S0-03 Prisma schema MVP v1" "Implement Prisma schema: User, PlayerProfile, CoachPlayerLink, TaskTemplate, CalendarEvent, TaskLog." "db,mvp"
create_issue "S0-04 Auth + RBAC (NestJS)" "JWT auth (access+refresh) + role guard ADMIN/COACH/PLAYER. /me endpoint." "auth,api"
create_issue "S0-05 CI workflow (GitHub Actions)" "Add CI: install pnpm, lint and build web+api." "ci"

create_issue "S1-01 API: TaskTemplates CRUD" "CRUD endpoints for TaskTemplates. Validate category (APPROACH/OTT/ARG/PUTTING) and input_schema." "api,tasks"
create_issue "S1-02 API: Calendar Events CRUD" "CRUD endpoints for CalendarEvents. Coaches can only create for assigned players." "api,calendar"
create_issue "S1-03 Web: Coach players list/grid" "Coach page to list assigned players; link to player calendar." "web,coach"
create_issue "S1-04 Web: FullCalendar base (load/display events)" "FullCalendar Week/Month views for player calendar; load events from API; event click opens drawer." "web,calendar"

create_issue "S2-01 Web: Task library + External Draggable" "Accordion + search task templates; make items draggable (FullCalendar Draggable)." "web,drag-drop,tasks"
create_issue "S2-02 Persist on drop (eventReceive -> POST)" "On eventReceive, POST /calendar/events; set returned id; on error revert." "web,api,drag-drop"
create_issue "S2-03 Persist move/resize (PATCH)" "On eventDrop/eventResize, PATCH /calendar/events/:id; on error revert." "web,calendar"
create_issue "S2-04 Web: Player Today/Week UI" "Player home showing Today/This Week tasks (mobile-friendly)." "web,player"
create_issue "S2-05 Player task logging (numeric/text)" "Player opens event and submits TaskLog based on input schema; coach can view logs later." "web,api,logging"

create_issue "S3-01 Custom task templates (Individual Blocks)" "Coach can create personal templates; appear in library; CRUD." "web,tasks"
create_issue "S3-02 Coach event drawer shows logs" "Coach sees TaskLogs in event drawer." "web,coach"
create_issue "S3-03 Admin: Upgame CSV import (optional)" "CSV upload endpoint creating snapshots (SG Approach/OTT/ARG/Putting/Total)." "api,import"

echo "Done. Open your repo Issues to see created items."
