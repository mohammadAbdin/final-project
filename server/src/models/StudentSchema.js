import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const reportSchema = new mongoose.Schema({
  teacher_id: String,
  date: String, // e.g., 'Monday'
  title: String, // e.g., '09:00-10:00'
  description: String,
});
// {
// teacher_name: 'Mia Levy',
//   date: '2024-07-25',
//   title: 'General Progress Report',
//   description:
//     'The student has shown significant progress in general subjects. However, there is a need for improvement in homework preparation.',
// },
const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    unique: true,
  },
  parent_id: String,
  name: String,
  gender: String,
  class: String,
  report: [reportSchema],
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
