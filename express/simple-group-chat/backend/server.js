import "dotenv/config";
import http from "http";
import app from "./src/app.js";
import { testDatabaseConnection } from "./src/config/db.js";

const port = process.env.PORT || 5000;

// Socket.IO will be attached to this HTTP server later.
const httpServer = http.createServer(app);

const startServer = async () => {
  try {
    await testDatabaseConnection();

    httpServer.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Server could not start:", error.message);
    process.exit(1);
  }
};

startServer();

