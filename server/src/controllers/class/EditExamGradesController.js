import getclassModel from "../../models/ClassSchema.js";

export const EditExamGrades = async (req, res) => {
  try {
    const { modifiedStudents, classNumber, userId } = req.body;

    if (!modifiedStudents || !classNumber || !userId) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const Class = await getclassModel();

    const classObj = await Class.findOne({ class: classNumber });
    if (!classObj) {
      return res.status(404).json({ message: "Class not found" });
    }

    const subject = classObj.subjects.find(
      (subject) => subject.teacher_id === userId
    );
    if (!subject) {
      return res
        .status(404)
        .json({ message: "Subject not found for this teacher" });
    }

    const exam = subject.exams.find(
      (exam) => exam.examName === modifiedStudents[0]?.examName
    );
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }

    for (const student of modifiedStudents) {
      const { student_id, Grade } = student;

      const existingGrade = exam.studentGrades.find(
        (sg) => sg.student_id === student_id
      );

      if (existingGrade) {
        existingGrade.Grade = Number(Grade);
      } else {
        exam.studentGrades.push({
          student_id,
          Grade: Number(Grade),
        });
      }
    }

    await classObj.save();

    res.status(200).json({ message: "Exam grades updated successfully" });
  } catch (error) {
    console.error("Error updating exam grades:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
