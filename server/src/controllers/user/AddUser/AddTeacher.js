import getTeacherModel from "../../../models/TeacherSchema.js";
import { AddClasses } from "./AddClasses.js";
export const AddTeacher = async (formData, newUser, fullName, email, res) => {
  const { phone, gender, age, subject, schedule } = formData;
  try {
    const Teacher = await getTeacherModel();
    const newTeacher = new Teacher({
      teacher_id: newUser._id,
      name: fullName,
      age: age,
      phone: phone,
      gender: gender,
      subject: subject,
      schedule: schedule,
    });
    await newTeacher.save();
    await newUser.save();
    AddClasses(schedule, subject, newUser._id, res);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
