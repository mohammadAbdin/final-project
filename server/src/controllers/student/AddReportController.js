import getStudentModel from "../../models/StudentSchema.js";

export const AddReport = async (req, res) => {
  try {
    const { student_id, newFeedback } = req.body;

    if (!student_id || !newFeedback) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const Student = await getStudentModel();

    const studentObj = await Student.findOne({ student_id });
    if (!studentObj) {
      return res.status(404).json({ message: "Student not found" });
    }
    studentObj.report.push(newFeedback);
    console.log(studentObj.report);
    await studentObj.save();

    return res.status(200).json({ message: "Report added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
