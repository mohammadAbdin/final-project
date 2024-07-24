import express from "express";
import { getAllParents } from "../controllers/parent/GetParentIds.js";
const router = express.Router();
router.get("/all-ids", getAllParents);
export default router;
