import getStudentModel from "../../models/StudentSchema.js";

export const GetStudentSchedule = async (req, res) => {
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

    const student = result[0];
    const { classInfo } = student;

    res.status(200).json(classInfo.schedule);
  } catch (error) {
    console.error("Error fetching student schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};
