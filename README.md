# Sync Canvas

A monorepo containing a React frontend (`apps/web`) and a NestJS backend (`apps/api`).

## Prerequisites

- Node.js >= 18
- pnpm >= 9

## Getting started

Install dependencies from the repo root:

```bash
pnpm install
```

### Run everything

```bash
pnpm dev
```

### Run individually

```bash
# API only (http://localhost:3000)
pnpm --filter api start:dev

# Web only (http://localhost:5173)
pnpm --filter web dev
```

---

## API — Auth endpoints

Base URL: `http://localhost:3000`

### `POST /auth/register`

Create a new account.

**Body**

```json
{
  "email": "alice@example.com",
  "password": "securepass",
  "displayName": "Alice"
}
```

**Response `201`**

```json
{ "access_token": "<jwt>" }
```

---

### `POST /auth/login`

Authenticate with email and password.

**Body**

```json
{
  "email": "alice@example.com",
  "password": "securepass"
}
```

**Response `200`**

```json
{ "access_token": "<jwt>" }
```

---

**Error responses**

| Status             | Reason                    |
| ------------------ | ------------------------- |
| `400 Bad Request`  | Invalid or missing fields |
| `401 Unauthorized` | Wrong password            |
| `409 Conflict`     | Email already registered  |

> The JWT token expires in **7 days**. Set the `JWT_SECRET` environment variable before deploying to production.
