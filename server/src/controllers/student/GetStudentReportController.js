import getStudentModel from "../../models/StudentSchema.js";

export const GetStudentReport = async (req, res) => {
  try {
    const { id } = req.params;
    const Student = await getStudentModel();

    const studentObj = await Student.findOne({ student_id: id });
    if (!studentObj) {
      return res.status(404).json({ message: "Student not found" });
    }

    const reports = studentObj.report;
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching student schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};
