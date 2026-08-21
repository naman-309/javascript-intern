// Global and register-specific HTTP rate limiters will be added here.

import { rateLimit } from "express-rate-limit";

// Registration ke liye rate limiter
export const registerLimiter = rateLimit({
    // 1 hour
    windowMs: 60 * 60 * 1000,
    // Ek IP se maximum 1 request
    limit: 1,


    // Rate-limit information response headers me bhejega
    standardHeaders: true,

    // Purane headers disable
    legacyHeaders: false,

    // Limit cross hone par response
    message: {
        message: "Too many registration attempts. Try again after 1 hour."
    }
});




