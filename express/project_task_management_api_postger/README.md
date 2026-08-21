├── config/
│   └── db.js                 # PostgreSQL Pool connection settings
├── db/
│   └── db.setup.js           # Auto table creation script (Run on startup)
├── controllers/
│   ├── auth.controller.js    # Register, Login, Logout logic
│   ├── user.controller.js    # Profile management logic
│   └── task.controller.js    # Task CRUD logic with ownership checks
├── middlewares/
│   └── auth.middleware.js    # JWT verification middleware
├── routes/
│   ├── auth.routes.js        # Auth endpoint definitions
│   ├── user.routes.js        # User endpoint definitions
│   └── task.routes.js        # Task endpoint definitions
├── .env                      # Environment variables (Git-ignored)
├── .env.example              # Sample environment template
├── server.js                 # Express app initialization & server startup
└── README.md
