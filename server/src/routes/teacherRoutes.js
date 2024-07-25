import express from "express";
import { GetTeacherSchedule } from "../controllers/teacher/GetTeacherScheduleController.js";
const router = express.Router();
router.get("/Teacher-Schedule/:id", GetTeacherSchedule);
export default router;
