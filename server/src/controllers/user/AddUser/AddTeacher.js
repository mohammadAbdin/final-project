import getTeacherModel from "../../../models/TeacherSchema.js";
import { AddClasses } from "./AddClasses.js";
export const AddTeacher = async (formData, newUser, fullName, email, res) => {
  const { phone, gender, age, subject, schedule } = formData;
  try {
    // console.log(formData);
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
    // console.log("newTeacher", newTeacher);
    await newTeacher.save();
    await newUser.save();
    AddClasses(schedule, subject, newUser._id, res);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//   {
//     fullName: 'mohammad abdin',
//     email: 'm7md3bdeen132@gmail.com',
//     id: '3456789',
//     age: '45',
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
//     phone: '0525615707',
//     gender: 'male',
//   }
