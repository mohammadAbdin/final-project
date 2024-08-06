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
