import express from "express";
import { GetStudentSchedule } from "../controllers/student/GetStudentScheduleController.js";
import { GetStudentSubjects } from "../controllers/student/GetStudentSubjectsController.js";
const router = express.Router();
router.get("/Student-Schedule/:id", GetStudentSchedule);
router.get("/Student-Subjects/:id", GetStudentSubjects);
export default router;
