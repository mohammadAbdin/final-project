import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const examSchema = new mongoose.Schema({
  examName: String,
  maxPoints: Number,
  studentMarks: [
    {
      studentId: String,
      studentName: String,
      marks: Number,
    },
  ],
});

const subjectSchema = new mongoose.Schema({
  subjectName: String,
  teacherId: String,
  resources: [String], // URLs for YouTube videos or other resources
  exams: [examSchema],
});

const classSchema = new mongoose.Schema({
  class: {
    type: Number,
    required: true,
  },
  subjects: [subjectSchema],
});

let Class;

dbConnectionPromise.then((db) => {
  Class = db.model("class", classSchema); //i must add the collection name
});

export default async function getclassModel() {
  if (!Class) {
    await dbConnectionPromise;
  }
  return Class;
}
