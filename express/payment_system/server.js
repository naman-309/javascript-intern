import "dotenv/config";
import app from "./src/app.js";
import { testDatabaseConnection } from "./src/config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await testDatabaseConnection();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();

process.on("unhandledRejection", (error) => {
  console.error("Unhandled rejection:", error.message);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error.message);
  process.exit(1);
});
