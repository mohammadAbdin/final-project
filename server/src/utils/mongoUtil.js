import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://m7md3bdeen132:4ChdA4JZV6j1oZjC@revops.6gkiteh.mongodb.net/?appName=RevOps";
console.log("MONGO_URI:", MONGO_URI);

let db;

export async function closeDbConnection() {
  await mongoose.connection.close();
  console.log("MongoDB connection closed.");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    db = mongoose.connection.useDb("school_managment"); // Corrected database name
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export const getDb = () => db;

export const dbConnectionPromise = connectDB().then(() => db);
