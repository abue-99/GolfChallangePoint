# Database Schema

The database is managed with **Prisma ORM** and **PostgreSQL**.

Schema file: `apps/web/prisma/schema.prisma`

---

## Models

### User

The central user model. A user can have one of four roles.

| Field          | Type      | Description                                 |
|----------------|-----------|---------------------------------------------|
| `id`           | String    | CUID primary key                            |
| `email`        | String    | Unique email address                        |
| `passwordHash` | String    | bcrypt-hashed password                      |
| `firstName`    | String    | First name                                  |
| `lastName`     | String    | Last name                                   |
| `profileImage` | String?   | Optional profile image URL                  |
| `role`         | Role      | `PLAYER`, `COACH`, `CLUBADMIN`, `SUPERADMIN`|
| `clubId`       | String?   | FK to Club (optional)                       |
| `createdAt`    | DateTime  | Creation timestamp                          |
| `updatedAt`    | DateTime  | Last update timestamp                       |

---

### Club

Represents a golf club.

| Field      | Type     | Description                   |
|------------|----------|-------------------------------|
| `id`       | String   | CUID primary key              |
| `name`     | String   | Club name                     |
| `logo`     | String?  | Optional logo URL             |
| `createdAt`| DateTime | Creation timestamp            |
| `updatedAt`| DateTime | Last update timestamp         |

Relations: `members` (Users), `coaches` (Users), `admins` (Users)

---

### PlayerProfile

Extended profile data for players.

| Field    | Type   | Description               |
|----------|--------|---------------------------|
| `id`     | String | CUID primary key          |
| `userId` | String | FK to User (unique)       |

---

### CoachPlayerLink

Many-to-many relationship between coaches and players.

| Field      | Type   | Description         |
|------------|--------|---------------------|
| `id`       | String | CUID primary key    |
| `coachId`  | String | FK to User (coach)  |
| `playerId` | String | FK to User (player) |

Unique constraint: `(coachId, playerId)`

---

### CoachAssignment

Alternative coach-player assignment model.

| Field      | Type     | Description         |
|------------|----------|---------------------|
| `id`       | String   | CUID primary key    |
| `playerId` | String   | FK to User          |
| `coachId`  | String   | FK to User          |
| `createdAt`| DateTime | Assignment date     |

Unique constraint: `(playerId, coachId)`

---

### TaskTemplate

Reusable task definitions created by coaches.

| Field         | Type          | Description                                  |
|---------------|---------------|----------------------------------------------|
| `id`          | String        | CUID primary key                             |
| `title`       | String        | Task title                                   |
| `category`    | TaskCategory  | `APPROACH`, `OTT`, `ARG`, `PUTTING`          |
| `inputSchema` | InputSchema   | `numeric_success`, `numeric_score`, `text_reflection` |
| `createdById` | String?       | FK to User (creator)                         |

---

### CalendarEvent

Scheduled training events linking players to task templates.

| Field        | Type     | Description                    |
|--------------|----------|--------------------------------|
| `id`         | String   | CUID primary key               |
| `playerId`   | String   | FK to User (player)            |
| `templateId` | String   | FK to TaskTemplate             |
| `start`      | DateTime | Event start time               |
| `end`        | DateTime | Event end time                 |
| `createdById`| String   | FK to User (creator)           |

---

### TaskLog

Logged results for a calendar event.

| Field      | Type        | Description                        |
|------------|-------------|------------------------------------|
| `id`       | String      | CUID primary key                   |
| `eventId`  | String      | FK to CalendarEvent                |
| `type`     | InputSchema | Log type                           |
| `attempts` | Int?        | Number of attempts (numeric tasks) |
| `successes`| Int?        | Number of successes                |
| `score`    | Float?      | Numeric score                      |
| `text`     | String?     | Text reflection                    |
| `createdAt`| DateTime    | Creation timestamp                 |

---

### PasswordResetToken

Short-lived tokens for password resets.

| Field      | Type     | Description             |
|------------|----------|-------------------------|
| `id`       | String   | CUID primary key        |
| `email`    | String   | User email              |
| `token`    | String   | Unique reset token      |
| `expiresAt`| DateTime | Token expiry            |
| `createdAt`| DateTime | Creation timestamp      |

---

## Enums

### Role
```
PLAYER | COACH | CLUBADMIN | SUPERADMIN
```

### TaskCategory
```
APPROACH | OTT | ARG | PUTTING
```

### InputSchema
```
numeric_success | numeric_score | text_reflection
```

---

## Migrations

Run database migrations:
```bash
cd apps/web
pnpm prisma migrate dev --name <migration-name>
```

Reset the database (development only):
```bash
pnpm prisma migrate reset
```

View the database in Prisma Studio:
```bash
pnpm prisma studio
```
