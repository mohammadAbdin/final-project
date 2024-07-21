import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const attendanceSchema = new mongoose.Schema({
  date: {
    type: String, // Format: 'year/month/day'
    required: true,
  },
  grade: [
    {
      students: {
        name: String,
        id: String,
      },
    },
  ],
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
