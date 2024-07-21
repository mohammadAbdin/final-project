import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  day: String, // e.g., 'Monday'
  period: String, // e.g., '09:00-10:00'
  grade: String,
  subject: String,
});

const teacherSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "teacher",
  },
  notifications: [String],
  gender: String,
  age: Number,
  name: String,
  subject: String,
  schedule: [scheduleSchema],
});

export default mongoose.model("Teacher", teacherSchema);
