import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const studentScheduleSchema = new mongoose.Schema({
  day: String, // e.g., 'Monday'
  period: String, // e.g., '09:00-10:00'
  subject: String,
});

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    // required: true,
    unique: true,
  },
  name: String,
  gender: String,
  class: String,
  schedule: [studentScheduleSchema],
});
let Student;

dbConnectionPromise.then((db) => {
  Student = db.model("Student", studentSchema); //i must add the collection name
});

export default async function getStudentModel() {
  if (!Student) {
    await dbConnectionPromise;
  }
  return Student;
}
