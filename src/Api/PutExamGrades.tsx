import axios from "axios";

interface ModifiedStudent {
  student_id: string;
  examName: string;
  Grade: string;
}

export const PutExamMarks = async (
  modifiedStudents: ModifiedStudent[],
  userId: string | undefined,
  classNumber: string | undefined
): Promise<void> => {
  if (!userId || !classNumber) {
    console.error("User ID or class number is missing.");
    return;
  }

  try {
    await axios.put("http://localhost:5001/class/exam-grade-edits", {
      modifiedStudents,
      userId,
      classNumber,
    });
    console.log("Exam marks updated successfully.");
  } catch (error) {
    console.error("Failed to update exam marks:", error);
  }
};
