import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);

let db;

export async function closeDbConnection() {
  await client.close();
  console.log("MongoDB connection closed.");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export const getDb = () => mongoose.connection.db;
export { db };
