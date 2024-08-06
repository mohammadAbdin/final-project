import express from "express";
import { GetTeacherSchedule } from "../controllers/teacher/GetTeacherScheduleController.js";
import { GetTeacherClasses } from "../controllers/teacher/GetTeacherSubjectsController.js";
const router = express.Router();
router.get("/Teacher-Schedule/:id", GetTeacherSchedule);
router.get("/Teacher-Classes/:id", GetTeacherClasses);
export default router;
