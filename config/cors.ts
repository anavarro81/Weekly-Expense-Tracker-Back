export const corsConfig = {
  origin: function (origin: any, callback: any) {
    const allowedOrigins = [
      "https://weekly-expense-tracker.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Type"],
  preflightContinue: false,
  optionsSuccessStatus: 200,
};
