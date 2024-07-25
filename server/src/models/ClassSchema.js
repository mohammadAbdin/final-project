import mongoose from "mongoose";
import { dbConnectionPromise } from "../utils/mongoUtil.js";

const examSchema = new mongoose.Schema({
  exam_id: String,
  examName: String,
  studentGrades: [
    {
      student_id: String,
      Grade: Number,
    },
  ],
});
const videosSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String, // URL for YouTube videos or other resources
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  videos: [videosSchema],
});

const subjectSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  teacher_id: { type: String, required: true },
  resources: [resourceSchema], // URLs for YouTube videos or other resources
  exams: [examSchema],
});

const scheduleSchema = new mongoose.Schema({
  day: String, // e.g., 'Monday'
  period: String, // e.g., '09:00-10:00'
  subject: String,
});
const classSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  schedule: { type: [scheduleSchema], required: true },
  subjects: { type: [subjectSchema], required: true },
  // validate: {
  //   validator: function (subjects) {
  //     const subjectNames = new Set();
  //     for (const subject of subjects) {
  //       if (subjectNames.has(subject.subjectName)) {
  //         return false;
  //       }
  //       subjectNames.add(subject.subjectName);
  //     }
  //     return true;
  //   },
  //   message: "Each class must have unique subject names.",
  // },
});

let Class;

dbConnectionPromise.then((db) => {
  Class = db.model("class", classSchema, "classes"); //i must add the collection name
});

export default async function getclassModel() {
  if (!Class) {
    await dbConnectionPromise;
  }
  return Class;
}
