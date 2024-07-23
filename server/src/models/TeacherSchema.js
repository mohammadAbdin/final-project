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
    // required: true,
    unique: true,
  },
  name: String,
  age: Number,
  gender: String,
  subject: String,
  schedule: [scheduleSchema],
});
// const newTeacher = new Teacher({
//   _id: 'teacher123', // Manually set the _id
//   name: 'John Doe',
//   age: 30,
//   gender: 'Male',
//   subject: 'Math',
//   schedule: [
//     { day: 'Monday', period: '09:00-10:00', class: '101' },
//     { day: 'Wednesday', period: '11:00-12:00', class: '102' }
//   ]
// });
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
