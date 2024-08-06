import { restructureAttendance } from "../../logic/restructureAttendance .js";
import getclassModel from "../../models/ClassSchema.js";

export const GetClassStudentAttendance = async (req, res) => {
  try {
    const { selectedDate, classNumber, id } = req.query;
    const Class = await getclassModel();

    const pipeline = [
      { $match: { class: classNumber } },
      { $unwind: "$subjects" },
      { $match: { "subjects.teacher_id": id } },
      {
        $project: {
          dates: "$subjects.date",
        },
      },
      {
        $lookup: {
          from: "students",
          let: { class: classNumber },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$class", "$$class"],
                },
              },
            },
            {
              $project: {
                student_id: 1,
                name: 1,
              },
            },
          ],
          as: "students",
        },
      },
    ];

    const attendanceRecords = await Class.aggregate(pipeline);
    const structuredData = restructureAttendance(
      attendanceRecords[0],
      selectedDate
    );

    res.json(structuredData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch classes" });
  }
};
