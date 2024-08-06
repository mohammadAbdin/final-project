import getStudentModel from "../../models/StudentSchema.js";

export const GetStudentSubjects = async (req, res) => {
  try {
    const { id } = req.params;
    const Student = await getStudentModel();
    const result = await Student.aggregate([
      { $match: { student_id: id } },
      {
        $lookup: {
          from: "classes",
          localField: "class",
          foreignField: "class",
          as: "classInfo",
        },
      },
      { $unwind: "$classInfo" },
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    const subjects = result[0].classInfo.subjects.map(
      (subjectObj) => subjectObj.subject
    );
    res.status(200).json(subjects);
  } catch (error) {
    console.error("Error fetching student schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};
