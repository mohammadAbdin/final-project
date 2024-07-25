import express from "express";
import { GetAllClasses } from "../controllers/class/GetAllClasses.js";
const router = express.Router();
router.get("/all-classes", GetAllClasses);
export default router;
