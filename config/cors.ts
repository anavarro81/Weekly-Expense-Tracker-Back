const allowedOrigins = new Set([
  "https://weekly-expense-tracker.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
]);

export const corsConfig = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.has(origin)) {
      console.log(`CORS allowed for origin: ${origin}`);
      callback(null, true);
      return;
    }

    console.log(`CORS blocked for origin: ${origin}`);
    callback(null, false);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};
