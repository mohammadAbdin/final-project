import axios from "axios";
import { StudentsAttendanceType } from "../Types/StudentsAttendanceType";

export const PutStudentsAttendace = async (
  studentsWithAttendance: StudentsAttendanceType[] | undefined,
  selectedDate: string,
  teacher_id: string | undefined,
  classNumber: string | undefined
): Promise<void> => {
  if (!studentsWithAttendance || !selectedDate || !teacher_id) {
    console.error("User ID or class number is missing.");
    return;
  }

  try {
    await axios.put("http://localhost:5001/class/attendance-students-edits", {
      studentsWithAttendance,
      selectedDate,
      teacher_id,
      classNumber,
    });
    console.log("Exam marks updated successfully.");
  } catch (error) {
    console.error("Failed to update exam marks:", error);
  }
};
