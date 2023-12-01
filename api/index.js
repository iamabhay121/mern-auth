import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
  });

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on Port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//MiddleWare

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
