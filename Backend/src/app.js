// app.js (backend entry)
import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// ✅ Correct PORT handling
const PORT = process.env.PORT || 8000;

// ✅ CORS configuration
const allowedOrigins = [
  "http://localhost:5173",                  // Local dev frontend
  "https://vibe-connect-frontend.onrender.com", // Production frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like curl, Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Body parsers
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// ✅ API routes
app.use("/api/v1/users", userRoutes);

// ✅ MongoDB + Server start
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://pain38686:CN1LddebtI1HNDMR@cluster0.rljovjz.mongodb.net/zoom-clone?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(`✅ MONGO Connected: ${connectionDb.connection.host}`);

    server.listen(PORT, () => {
      console.log(`🚀 Server running on PORT ${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB Connection Error:", err);
    process.exit(1);
  }
};

start();
