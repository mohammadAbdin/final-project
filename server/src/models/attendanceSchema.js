import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";
// specific date a specific subject a specific class

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

const attendanceSchema = new mongoose.Schema({
  date: {
    type: String, // Format: 'year/month/day'
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  students: [studentSchema],
});
attendanceSchema.index({ date: 1, class: 1, subject: 1 }, { unique: true });

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
