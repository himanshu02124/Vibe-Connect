import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);

// ✅ Correct CORS config – must come BEFORE routes
app.use(cors({
  origin: [
    "http://localhost:5173",                 // dev frontend
    "https://vibe-connect-frontend.onrender.com" // deployed frontend
  ],
  credentials: true
}));

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// ✅ Mount routes
app.use("/api/v1/users", userRoutes);

const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://pain38686:CN1LddebtI1HNDMR@cluster0.rljovjz.mongodb.net/zoom-clone?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log(`LISTENING ON PORT ${app.get("port")}`);
    });
  } catch (err) {
    console.error("DB Connection Error:", err);
  }
};

start();
