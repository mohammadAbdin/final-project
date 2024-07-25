import express from "express";
import { GetStudentSchedule } from "../controllers/student/GetStudentScheduleController.js";
const router = express.Router();
router.get("/Student-Schedule/:id", GetStudentSchedule);
export default router;
