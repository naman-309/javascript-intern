# Simple Group Chat

A learning-focused group chat project using React, Express, PostgreSQL (Neon), cookie-based JWT authentication, role-based authorization, rate limiting, and Socket.IO.

Development starts with the backend. The frontend folder is intentionally empty for now.

## Start backend setup

```bash
cd backend
npm install
```

Copy the Neon connection string and JWT secret into `backend/.env`, then run:

```bash
npm run db:setup
npm run dev
```

