import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const examSchema = new mongoose.Schema({
  exam_id: { type: String, unique: true },
  examName: String,
  maxPoints: Number,
  studentMarks: [
    {
      student_id: String,
      marks: Number,
    },
  ],
});
const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String, // URL for YouTube videos or other resources
    required: true,
  },
});

const subjectSchema = new mongoose.Schema({
  subjectName: String,
  teacher_id: String,
  resources: [resourceSchema], // URLs for YouTube videos or other resources
  exams: [examSchema],
});

const classSchema = new mongoose.Schema({
  class_id: {
    type: String,
    // required: true,
    unique: true,
  },
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
