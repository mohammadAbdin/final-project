import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const scheduleSchema = new mongoose.Schema({
  day: String, // e.g., 'Monday'
  period: String, // e.g., '09:00-10:00'
  grade: String,
});

const teacherSchema = new mongoose.Schema({
  gender: String,
  age: Number,
  name: String,
  subject: String,
  schedule: [scheduleSchema],
});

let Teacher;

dbConnectionPromise.then((db) => {
  Teacher = db.model("Teacher", teacherSchema); //i must add the collection name
});

export default async function getTeacherModel() {
  if (!Teacher) {
    await dbConnectionPromise;
  }
  return Teacher;
}

// export default mongoose.model("Teacher", teacherSchema);
