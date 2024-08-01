import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const reportSchema = new mongoose.Schema({
  reportType: String,
  writer_id: String,
  date: String,
  title: String,
  description: String,
});

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
