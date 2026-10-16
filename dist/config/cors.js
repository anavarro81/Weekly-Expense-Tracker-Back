"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const allowedOrigins = new Set([
    "https://weekly-expense-tracker.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
]);
exports.corsConfig = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.has(origin)) {
            callback(null, true);
            return;
        }
        callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
};
//# sourceMappingURL=cors.js.map