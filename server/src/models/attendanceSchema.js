import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";
// specific date a specific subject a specific class

const studentSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
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
