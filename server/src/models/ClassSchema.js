import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const examSchema = new mongoose.Schema({
  exam_id: { type: String, unique: true },
  // maxPoints: Number,
  examName: String,
  studentGrades: [
    {
      student_id: String,
      Grade: Number,
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
  subjects: {
    type: [subjectSchema],
    validate: {
      validator: function (subjects) {
        // Create a Set to track unique subject names
        const subjectNames = new Set();
        for (const subject of subjects) {
          if (subjectNames.has(subject.subjectName)) {
            return false; // Duplicate found
          }
          subjectNames.add(subject.subjectName);
        }
        return true; // No duplicates
      },
      message: "Each class must have unique subject names.",
    },
  },
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
