import express from "express";
import { getAllParents } from "../controllers/parent/GetParentIds.js";
import { getParentChildren } from "../controllers/parent/GetParentChildrenController.js";
const router = express.Router();
router.get("/all-ids", getAllParents);
router.get("/Parent-Children/:id", getParentChildren);
export default router;
