---
name: "EPIC: Challangepoint MVP"
about: "Create the MVP epic issue for Challangepoint (Web + API)"
title: "EPIC: Challangepoint MVP (Web + API) — Calendar + Drag&Drop Task Library + Player Logging (English UI)"
labels: [epic, mvp]
assignees: []
---

# EPIC: Challangepoint MVP (Web + API)
**Goal:** Deliver a working MVP for academy training organization with:
- Coach/Academy planning (multi-player oversight)
- Drag & Drop task templates into a player calendar (FullCalendar External DnD)
- Player execution + logging (numeric/text)
- RBAC (Admin/Coach/Player)
- UI language: **English** (recommended locale: en-GB)

---

## 1) Product Objective (MVP)
Challangepoint MVP is the operational core for a golf academy:
- **Players** see what to do today/this week, and log results/feedback.
- **Coaches/Academy** can assign structured tasks/blocks by dragging templates into the calendar.

**MVP success criteria:**
- A coach can schedule tasks for a player via drag & drop in under 15 seconds per task.
- A player can log results in under 30 seconds per task.
- A coach can review player logs per session/event in one place.

---

## 2) Roles & Permissions
### Roles
- **ADMIN**: user management, templates, imports
- **COACH**: manage assigned players, calendar planning, review logs
- **PLAYER**: view own calendar/todos, submit logs, create personal tasks (optional)

### Access Rules (MVP)
- Players can only access their own events and logs.
- Coaches can only access assigned players (via CoachPlayerLink).
- Admin can access everything.

---

## 3) Core MVP Workflows
### Workflow A — Coach planning
1) Coach selects a player
2) Coach opens player calendar (week/month)
3) Coach drags a task template from the library into the calendar slot
4) System creates a calendar event linked to that template
5) Coach can move/resize the event and it persists

### Workflow B — Player execution & logging
1) Player opens Today/Week view
2) Player opens a scheduled task
3) Player submits a log based on template input type:
   - `numeric_success`: attempts + successes
   - `numeric_score`: score numeric
   - `text_reflection`: reflection text
4) Player marks task done (optional) / log serves as completion evidence

### Workflow C — Coach review
1) Coach opens an event in the calendar
2) Coach sees submitted logs for that event (history)
3) Coach can add a private note (optional MVP)

---

## 4) Domain Rules (Important)
### Task Categories (SG mapping)
Task templates must have exactly ONE category:
- `APPROACH`
- `OTT` (Off the Tee)
- `ARG` (Around the Green)
- `PUTTING`

**SG TOTAL is NOT allowed** as a task category (dashboard-only later).

### Task Template Input Schemas
- `numeric_success`  (attempts + successes)
- `numeric_score`    (score numeric)
- `text_reflection`  (free text)

### UI Language
- All UI strings, navigation, buttons: **English**
- Suggested default locale: **en-GB** (Monday week start + optional 24h)

---

## 5) Technical Decisions (Locked)
- Monorepo: pnpm workspaces + turborepo
- `apps/web`: Next.js (TypeScript)
- `apps/api`: NestJS (TypeScript) + Prisma
- DB: Postgres (docker-compose for local)
- Calendar: **FullCalendar** + `@fullcalendar/interaction` for External Drag & Drop

### FullCalendar persistence rules
- External drop uses `eventReceive`
- Persist on drop: `eventReceive → POST /calendar/events`
- Persist move/resize: `eventDrop/eventResize → PATCH /calendar/events/:id`
- On API error: revert UI change

---

## 6) Out of Scope (Phase 2+)
Not part of MVP (can be roadmap):
- Gamification (coins, leaderboards)
- Automatic difficulty engine (30% → 80% → harder)
- Video library & tagging
- Tournament periodization background coloring
- Advanced comparisons (peer group vs PGA), spider charts
- Real-time chat (MVP can be optional later)

---

## 7) Definition of Done (DoD) for this Epic
- [ ] Repo scaffolding complete (web+api+shared) and `pnpm dev` runs both apps
- [ ] DB schema migrated, seed users exist (Admin/Coach/Player)
- [ ] Auth works (JWT + RBAC)
- [ ] Coach can:
  - [ ] view assigned players
  - [ ] open player calendar
  - [ ] drag task templates into calendar (persisted)
  - [ ] move/resize events (persisted)
  - [ ] view player logs for an event
- [ ] Player can:
  - [ ] view Today/Week tasks
  - [ ] open a task and submit a log (numeric/text)
- [ ] CI passes on PR (lint + build)
- [ ] `.env.example` exists and no secrets are committed
- [ ] Basic Swagger docs available in API (`/docs`)

---

## 8) Milestones / Sprint Plan (Sub-Issues)
> Create the issues below and replace #TBD with actual issue numbers.

### Sprint 0 — Setup & Foundation
- [ ] S0-01 Monorepo scaffold (pnpm + turborepo) (#TBD)
- [ ] S0-02 Postgres docker-compose (#TBD)
- [ ] S0-03 Prisma schema MVP v1 (#TBD)
- [ ] S0-04 Auth + RBAC (NestJS) (#TBD)
- [ ] S0-05 CI workflow (GitHub Actions) (#TBD)

### Sprint 1 — Core API + Basic Calendar UI
- [ ] S1-01 API: TaskTemplates CRUD (#TBD)
- [ ] S1-02 API: Calendar Events CRUD (#TBD)
- [ ] S1-03 Web: Coach players list/grid (#TBD)
- [ ] S1-04 Web: FullCalendar base (load/display events) (#TBD)

### Sprint 2 — Drag & Drop + Player Logging
- [ ] S2-01 Web: Task library accordion + External Draggable (#TBD)
- [ ] S2-02 Web: Persist on drop (eventReceive → POST) (#TBD)
- [ ] S2-03 Web: Persist move/resize (PATCH) (#TBD)
- [ ] S2-04 Web: Player Today/Week UI (#TBD)
- [ ] S2-05 Web/API: Player task logging (numeric/text) (#TBD)

### Sprint 3 — Custom Templates + Optional Upgame Import (minimal)
- [ ] S3-01 Custom task templates (“Individual Blocks”) (#TBD)
- [ ] S3-02 Coach event drawer shows logs (#TBD)
- [ ] S3-03 Admin: Upgame CSV import → snapshots (optional) (#TBD)

---

## 9) QA Notes / Test Checklist
### Coach drag & drop test
- Drag template into calendar → event persists after refresh
- Move event → persists after refresh
- Resize event → persists after refresh
- Forbidden access: coach cannot create events for non-assigned players

### Player logging test
- Player logs numeric_success: attempts/successes saved correctly
- Player logs text_reflection: text saved correctly
- Coach can view logs per event
