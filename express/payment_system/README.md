# Simple Payment API

Simple Node.js + Express + Neon PostgreSQL project where one logged-in user can send balance to another user by ID.

## Setup

```bash
npm install
npm run dev
```

Add your Neon `DATABASE_URL` and JWT secret in `.env`, then run `database/schema.sql` in Neon SQL Editor.

## APIs

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/users/profile`
- `POST /api/payment/send`

Payment body:

```json
{
  "receiverId": 2,
  "amount": 500
}
```
