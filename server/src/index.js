import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import parentRoutes from "./routes/parentRoutes.js";
import { connectDB } from "./utils/mongoUtil.js";
import process from "process";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Connect to the database
connectDB();

// Routes
app.use("/user", authRoutes);
app.use("/parent", parentRoutes);

const PORT = process.env.PORT || 5001; // Change 5000 to another port, e.g., 5001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
