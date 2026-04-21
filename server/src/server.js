const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// ===============================
// CORS CONFIG (FIXED + CLEAN)
// ===============================
const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL, // from .env
].filter(Boolean); // removes undefined

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Postman / mobile apps

      const normalizedOrigin = origin.replace(/\/$/, "");

      if (allowedOrigins.includes(normalizedOrigin)) {
        callback(null, true);
      } else {
        console.log("❌ CORS Blocked:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ===============================
// Middleware
// ===============================
app.use(express.json());

// ===============================
// Routes
// ===============================
app.use("/api/users", require("./routes/user.routes"));

// ✅ NEW: API test route
app.get("/api/message", (req, res) => {
  res.json("API running 🚀");
});

// health check (for browser)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ===============================
// Error Handling
// ===============================
const errorHandler = require("./middleware/error.middleware");
app.use(errorHandler);

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();