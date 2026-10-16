export const corsConfig = {
  origin: [
    "https://weekly-expense-tracker.vercel.app/",
    "http://localhost:5173",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  // Permite las solicitudes CORS desde los orígenes especificados
  allowedHeaders: ["Content-Type", "Authorization"],
};
