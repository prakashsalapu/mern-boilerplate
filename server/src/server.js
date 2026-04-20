const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", require("./routes/user.routes"));

// health check
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
};

// error handling middleware (should be last)
const errorHandler = require("./middleware/error.middleware");
app.use(errorHandler);

startServer();