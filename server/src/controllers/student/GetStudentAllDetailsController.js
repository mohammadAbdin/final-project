import { restructuringStudentDetails } from "../../logic/restructuringStudentDetails.js";
import getStudentModel from "../../models/StudentSchema.js";
import getTeacherModel from "../../models/TeacherSchema.js";
// import { ClassInfoDetails } from "./../../../../src/Types/ClassInfoDetails";

export const GetStudentAllDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const Student = await getStudentModel();
    const Teacher = await getTeacherModel();
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
      { $unwind: "$classInfo" }, // Unwind the classInfo array
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    // console.log(result[0].classInfo.subjects);
    const studentReports = result[0].report;
    // console.log(reports);

    const reports = await Promise.all(
      studentReports.map(async (studentReport) => {
        const teacherObj = await Teacher.findOne({
          teacher_id: studentReport.writer_id,
        });
        studentReport["teacherName"] = teacherObj ? teacherObj.name : "Unknown";
        return studentReport;
      })
    );
    // console.log();
    restructuringStudentDetails(result[0].classInfo.subjects, id);
    res.status(200).json({ reports: reports });
  } catch (error) {
    console.error("Error fetching student schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//attendace
// each subject all exams and grades
//reports
