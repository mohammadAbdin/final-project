import express from "express";
import { GetTeacherSchedule } from "../controllers/teacher/GetTeacherScheduleController.js";
import { GetTeacherSubjects } from "../controllers/teacher/GetTeacherSubjectsController.js";
const router = express.Router();
router.get("/Teacher-Schedule/:id", GetTeacherSchedule);
router.get("/Teacher-Subjects/:id", GetTeacherSubjects);
export default router;
