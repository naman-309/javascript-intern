import "dotenv/config";
import http from "http";
import app from "./src/app.js";
import { testDatabaseConnection } from "./src/config/db.js";
import { checkConnection } from "./src/db/db.js";
import { Server } from "socket.io";
import { socketHandler } from "./src/socket/socket.handler.js";

// 
import { socketAuth } from "./src/socket/socket.auth.js";
const port = process.env.PORT || 5000;

// Create HTTP server
const httpServer = http.createServer(app);

//socket.io  connection  setup
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true
  }
});




//phle  middleware  to verify  
io.use(socketAuth);
// socket.io  related  code ko alg file mw  bhejna  
socketHandler(io);




//    start  karne  ke  liye  function
const startServer = async () => {
  try {
    await testDatabaseConnection();

    httpServer.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
      checkConnection()
    });
  } catch (error) {
    console.error("Server could not start:", error.message);
    process.exit(1);
  }
};

startServer();

