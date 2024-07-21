import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  examName: String,
  maxPoints: Number,
  studentMarks: [
    {
      studentId: String,
      marks: Number,
    },
  ],
});

const subjectSchema = new mongoose.Schema({
  subjectName: String,
  resources: [String], // URLs for YouTube videos or other resources
  exams: [examSchema],
});

const gradeSchema = new mongoose.Schema({
  gradeLevel: {
    type: Number,
    required: true,
  },
  teacherId: String,
  subjects: [subjectSchema],
});

export default mongoose.model("Grade", gradeSchema);
