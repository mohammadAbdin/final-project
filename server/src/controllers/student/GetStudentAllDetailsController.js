import { Worker } from "worker_threads";
import getStudentModel from "../../models/StudentSchema.js";
import getTeacherModel from "../../models/TeacherSchema.js";
import { generateSchedule } from "./../../logic/restructureSechedule.js";
import calculateOverallAverage from "./../../logic/calculateOverallAverage.js";
export const GetStudentAllDetails = async (req, res) => {
  let hasResponded = false;
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
      { $unwind: "$classInfo" },
    ]);
    console.log(result[0]);

    if (result.length === 0) {
      if (!hasResponded) {
        res.status(404).json({ message: "Student not found" });
        hasResponded = true;
      }
      return;
    }

    const studentReports = result[0].report;

    const reports = await Promise.all(
      studentReports.map(async (studentReport) => {
        const teacherObj = await Teacher.findOne({
          teacher_id: studentReport.writer_id,
        });
        studentReport["teacherName"] = teacherObj ? teacherObj.name : "Unknown";
        return studentReport;
      })
    );

    const worker = new Worker(
      new URL("../../logic/restructuringStudentDetails.js", import.meta.url),
      {
        workerData: {
          subjectsDetails: result[0].classInfo.subjects,
          student_id: id,
        },
      }
    );
    console.time("Asynchronous Restructuring");

    worker.on("message", (restructuredDetails) => {
      if (!hasResponded) {
        const schedule = generateSchedule(result[0].classInfo.schedule);
        const average = calculateOverallAverage(restructuredDetails);
        // console.log(restructuredDetails, "restructuredDetails");
        res.status(200).json({
          reports: reports,
          details: restructuredDetails,
          schedule: schedule,
          personalDetails: {
            name: result[0].name,
            classNumber: result[0].classInfo.class,
            average: average,
          },
        });
        hasResponded = true;
      }
    });

    worker.on("error", (error) => {
      console.error("Worker error:", error);
      if (!hasResponded) {
        res.status(500).json({ message: "Server error" });
        hasResponded = true;
      }
    });

    console.timeEnd("Asynchronous Restructuring");
    worker.on("exit", (code) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
        if (!hasResponded) {
          res.status(500).json({ message: "Worker process error" });
          hasResponded = true;
        }
      }
    });
  } catch (error) {
    console.error("Error fetching student details:", error);
    if (!hasResponded) {
      res.status(500).json({ message: "Server error" });
      hasResponded = true;
    }
  }
};
