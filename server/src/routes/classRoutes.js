import express from "express";
import { GetAllClasses } from "../controllers/class/GetAllClasses.js";
import { GetClassExams } from "../controllers/class/GetClassExamsController.js";
import { PostExam } from "../controllers/class/PostExamController.js";
const router = express.Router();
router.get("/all-classes", GetAllClasses);
router.get("/class-exams", GetClassExams);
router.post("/Add-exam", PostExam);
export default router;
