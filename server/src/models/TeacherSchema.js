import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const scheduleSchema = new mongoose.Schema({
  day: String, // e.g., 'Monday'
  period: String, // e.g., '09:00-10:00'
  class: String,
});

const teacherSchema = new mongoose.Schema({
  teacher_id: {
    type: String,
    unique: true,
  },
  name: String,
  age: Number,
  gender: String,
  subject: String,
  schedule: [scheduleSchema],
});
teacherSchema.pre("save", function (next) {
  const schedule = this.schedule;
  const scheduleSet = new Set();
  for (const entry of schedule) {
    const key = `${entry.day}_${entry.period}_${entry.class}`;
    if (scheduleSet.has(key)) {
      return next(new Error(`Duplicate schedule entry found: ${key}`));
    }
    scheduleSet.add(key);
  }

  next();
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
