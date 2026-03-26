# API Reference

## Base URLs

| App         | URL                       |
|-------------|---------------------------|
| Next.js BFF | `http://localhost:3000`   |
| NestJS API  | `http://localhost:4000`   |

## Authentication

All protected endpoints require a JWT token sent as an `Authorization: Bearer <token>` header, or as a `token` cookie.

---

## Auth Endpoints (Next.js BFF – `/auth/*`)

### POST `/auth/login`

Authenticate a user and receive a JWT token.

**Request body:**
```json
{
  "email": "player@example.com",
  "password": "secret"
}
```

**Response 200:**
```json
{
  "token": "<jwt>"
}
```

**Response 401:**
```json
{ "error": "Invalid credentials" }
```

---

### POST `/auth/signup`

Register a new user account.

**Request body:**
```json
{
  "email": "player@example.com",
  "password": "secret",
  "firstName": "Max",
  "lastName": "Mustermann",
  "profileImage": "https://example.com/avatar.png"
}
```

**Response 201:**
```json
{
  "message": "User created",
  "userId": "<cuid>"
}
```

---

### GET `/auth/me`

Get the currently authenticated user.

**Headers:** `Authorization: Bearer <token>`

**Response 200:**
```json
{
  "id": "<cuid>",
  "email": "player@example.com",
  "firstName": "Max",
  "lastName": "Mustermann",
  "role": "PLAYER",
  "clubId": "<cuid>"
}
```

---

### POST `/auth/forgot`

Request a password reset email.

**Request body:**
```json
{ "email": "player@example.com" }
```

**Response 200:**
```json
{ "message": "Reset email sent" }
```

---

### POST `/auth/reset`

Reset password using a token from the reset email.

**Request body:**
```json
{
  "token": "<reset-token>",
  "password": "new-secret"
}
```

**Response 200:**
```json
{ "message": "Password updated" }
```

---

## Club Admin Endpoints (Next.js BFF – `/api/club/*`)

### GET `/api/club/admins`

Get all admins for the authenticated user's club.

**Headers:** `Authorization: Bearer <token>`

**Roles:** `CLUBADMIN`, `SUPERADMIN`

---

### POST `/api/club/admins/manage`

Promote a user to `CLUBADMIN`.

**Headers:** `Authorization: Bearer <token>`

**Request body:**
```json
{ "userId": "<cuid>" }
```

---

### DELETE `/api/club/admins/manage`

Demote a `CLUBADMIN` back to `PLAYER`.

**Headers:** `Authorization: Bearer <token>`

**Request body:**
```json
{ "userId": "<cuid>" }
```

---

## NestJS API Endpoints (`http://localhost:4000`)

> The NestJS API is currently being extended. See `apps/api/src/modules/` for available endpoints.

### GET `/`

Health check endpoint.

**Response 200:** `"Hello World!"`
