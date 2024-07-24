import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    unique: true,
  },
  parent_id: String,
  name: String,
  gender: String,
  class: String,
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
