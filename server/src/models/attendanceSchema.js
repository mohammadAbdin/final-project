import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
  },
  attendance: {
    type: Boolean,
    default: false,
  },
});
const dateSchema = new mongoose.Schema({
  date: {
    type: String, // Format: 'year/month/day'
  },
  students: [studentSchema],
});
const subjectSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  date: [dateSchema],
});
const attendanceSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  subjects: { type: [subjectSchema], required: true },
});

let Attendance;

dbConnectionPromise.then((db) => {
  Attendance = db.model("Attendance", attendanceSchema);
});

export default async function getAttendanceModel() {
  if (!Attendance) {
    await dbConnectionPromise;
  }
  return Attendance;
}
