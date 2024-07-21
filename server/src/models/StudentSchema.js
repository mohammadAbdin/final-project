import mongoose from "mongoose";

const studentScheduleSchema = new mongoose.Schema({
  day: String, // e.g., 'Monday'
  period: String, // e.g., '09:00-10:00'
  subject: String,
});

const studentSchema = new mongoose.Schema({
  name: String,
  grade: String,
  schedule: [studentScheduleSchema],
  notifications: [String],
});

export default mongoose.model("Student", studentSchema);
