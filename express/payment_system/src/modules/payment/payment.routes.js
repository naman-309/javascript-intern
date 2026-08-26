import express from "express";
import { sendMoney } from "./payment.controller.js";
import { authenticateUser } from "../../middleware/auth.middleware.js";
import { validatePayment } from "../../validators/payment.validator.js";

const router = express.Router();


router.post("/send", authenticateUser, validatePayment, sendMoney);

export default router;
