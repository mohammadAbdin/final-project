import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import parentRoutes from "./routes/parentRoutes.js";
import classRoutes from "./routes/classRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import { connectDB } from "./utils/mongoUtil.js";
import process from "process";

const app = express();

// Middleware
const allowedOrigins = ["http://localhost:3006"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (
      allowedOrigins.includes(origin) ||
      origin.includes("netlify.app") ||
      origin.includes("http://localhost")
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// Connect to the database
connectDB();

// Routes
app.use("/user", authRoutes);
app.use("/parent", parentRoutes);
app.use("/class", classRoutes);
app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);

const PORT = process.env.PORT || 5001; // Change 5000 to another port, e.g., 5001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
