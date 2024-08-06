import getclassModel from "../../models/ClassSchema.js";
export const PostExam = async (req, res) => {
  try {
    const { className, exam, id } = req.body;
    const ClassModel = await getclassModel();
    const classObj = await ClassModel.findOne({ class: className });
    if (!classObj) {
      return res.status(404).json({ message: "Class not found" });
    }

    const subject = classObj.subjects.find(
      (subject) => subject.teacher_id === id
    );

    if (!subject) {
      return res
        .status(404)
        .json({ message: "Subject not found for this teacher" });
    }

    const examObj = { exam_id: "1", examName: exam, studentGrades: [{}] };

    if (
      !examObj.exam_id ||
      !examObj.examName ||
      !Array.isArray(examObj.studentGrades)
    ) {
      return res.status(400).json({ message: "Invalid exam object structure" });
    }

    subject.exams.push(examObj);
    await classObj.save();

    res.status(200).json({ message: "Exam added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
