import express from "express";
import { GetAllClasses } from "../controllers/class/GetAllClasses.js";
import { PostExam } from "../controllers/class/PostExamController.js";
import { PostResource } from "../controllers/class/PostResourceController.js";
import { PostVideoResource } from "../controllers/class/PostVideoResourceController.js";
import { GetClassDeatils } from "../controllers/class/GetClassExamsController.js";
import { GetClassStudentAttendance } from "../controllers/class/GetClassStudentAttendanceController.js";
import { DeleteVideo } from "../controllers/class/DeleteVideoController.js";
import { EditExamGrades } from "../controllers/class/EditExamGradesController.js";
import { EditStudentsAttendance } from "../controllers/class/EditStudentsAttendanceController.js";
const router = express.Router();
router.get("/all-classes", GetAllClasses);
router.get("/class-exams", GetClassDeatils);
router.get("/attendance-date", GetClassStudentAttendance);
router.post("/Add-exam", PostExam);
router.post("/Add-resource", PostResource);
router.delete(
  "/class/delete-video/:classNumber/:teacher_id/:topicId/:videoId",
  DeleteVideo
);

router.post("/Add-video-resource", PostVideoResource);
router.put("/exam-grade-edits", EditExamGrades);
router.put("/attendance-students-edits", EditStudentsAttendance);
export default router;
