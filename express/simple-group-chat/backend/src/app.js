import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import morgan from "morgan";
const app = express();

// Frontend ko backend access dene ke liye

app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

// JSON body ko read karne ke liye
app.use(express.json());

// Cookies read karne ke liye
app.use(cookieParser());

// Health route
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API is working !!  mJAAAA agyaaaa!!!"
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// User routes
app.use("/api/users", userRoutes);
export default app;