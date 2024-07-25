import getClassModel from "../../../models/ClassSchema.js";

export const AddClasses = async (schedule, subject, teacher_id, res) => {
  try {
    const Class = await getClassModel();
    const className = schedule[0].class;
    // Find the class by name
    let existingClass = await Class.findOne({ class: className });

    if (existingClass) {
      // Check if the subject already exists in the class
      let subjectExists = existingClass.subjects.some(
        (sub) => sub.subject === subject
      );

      if (!subjectExists) {
        // Subject doesn't exist, add it
        existingClass.subjects.push({ subject });
      }

      // Add the schedule to the class
      existingClass.schedule.push(...schedule);

      // Save the updated class
      await existingClass.save();
    } else {
      // Class doesn't exist, create a new one
      const newClass = new Class({
        class: className,
        schedule: schedule,
        subjects: [{ subject }],
      });

      await newClass.save();
    }

    res.status(200).json({ message: "Class added/updated successfully" });
    console.log(Class);
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
