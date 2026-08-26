import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import paymentRoutes from "./modules/payment/payment.routes.js";
import { notFound, globalErrorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
// reads the  json data
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
  res.json({ message: "Simple Payment API application  by postman for testing" });
});



app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);


app.use(notFound);
app.use(globalErrorHandler);

export default app;

