import getClassModel from "../../../models/ClassSchema.js";
import { restructureSchedule } from "./restructureSchedule.js";
export const AddClasses = async (schedule, subject, teacher_id, res) => {
  try {
    const Class = await getClassModel();
    const restructuredSchedule = restructureSchedule(
      subject,
      schedule,
      teacher_id
    );
    restructuredSchedule.map(async (lesson) => {
      const { class: className, schedule, subject, teacher_id } = lesson;

      await Class.findOneAndUpdate(
        { class: className },
        {
          $push: { schedule: { $each: schedule } },
          $addToSet: { subjects: { subject: subject, teacher_id: teacher_id } },
        },
        { upsert: true, new: true }
      );
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// const subjectSchema = new mongoose.Schema({
//     subject: { type: String, required: true },
//     teacher_id: { type: String, required: true },
//     resources: [resourceSchema], // URLs for YouTube videos or other resources
//     exams: [examSchema],
//   });

//   const scheduleSchema = new mongoose.Schema({
//     day: String, // e.g., 'Monday'
//     period: String, // e.g., '09:00-10:00'
//     subject: String,
//   });
//   const classSchema = new mongoose.Schema({
//     class: {
//       type: String,
//       required: true,
//     },
//     schedule: { type: [scheduleSchema], required: true },
//     subjects: { type: [subjectSchema], required: true },
// {
//     schedule: [
//       { day: 'Monday', period: '09:00-10:00', class: '2' },
//       { day: 'Tuesday', period: '10:00-11:00', class: '2' },
//       { day: 'Wednesday', period: '11:00-12:00', class: '2' },
//       { day: 'Thursday', period: '12:00-13:00', class: '2' },
//       { day: 'Thursday', period: '08:00-09:00', class: '4' },
//       { day: 'Wednesday', period: '08:00-09:00', class: '4' }
//     ],
//     subject:"English"}

// [{
//     class: '3',
//     schedule: [
//       { day: 'Sunday', period: '09:00-10:00', subject: 'Biology' },
//       { day: 'Monday', period: '09:00-10:00', subject: 'Biology' },
//       { day: 'Tuesday', period: '09:00-10:00', subject: 'Biology' }
//     ],
//     subject: 'Biology'
//   }...]
