// import getclassModel from "../../models/ClassSchema.js";

// export const GetClassStudentAttendance = async (req, res) => {
//   try {
//     const { selectedDate, classNumber, id } = req.query;
//     const Class = await getclassModel();
//     const theClass = await Class.findOne({ class: classNumber });
//     const subject = theClass.subjects.find((classs) => classs.teacher_id == id);
//     console.log("subject", subject.date);
//     let attendanceRecord = "lo";
//     if (subject && subject.date.length > 0) {
//       console.log("hi");
//       attendanceRecord = subject.attendance.find(
//         (record) => record.date === selectedDate
//       );
//     }
//     console.log(attendanceRecord);
//   } catch (error) {
//     throw new Error("Failed to fetch classes");
//   }
// };
import { restructureAttendance } from "../../logic/restructureAttendance .js";
import getclassModel from "../../models/ClassSchema.js";
// import getStudentModel from "../../models/StudentSchema.js";

export const GetClassStudentAttendance = async (req, res) => {
  try {
    const { selectedDate, classNumber, id } = req.query;
    const Class = await getclassModel();
    // const Student = await getStudentModel();

    // Aggregation pipeline
    const pipeline = [
      { $match: { class: classNumber } }, // Match the class
      { $unwind: "$subjects" }, // Unwind the subjects array
      { $match: { "subjects.teacher_id": id } }, // Match the teacher's subject
      {
        $project: {
          //   subject: "$subjects.subject",
          //   teacher_id: "$subjects.teacher_id",
          dates: "$subjects.date", // Project all attendance dates
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
    // console.log(attendanceRecords[0]);
    console.log("attendanceRecords");
    const structuredData = restructureAttendance(
      attendanceRecords[0],
      selectedDate
    );

    // console.log(structuredData);
    res.json(structuredData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch classes" });
  }
};
