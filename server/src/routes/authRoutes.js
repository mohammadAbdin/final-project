import express from "express";
import { LoginUser } from "../controllers/logIn/logInController.js";
import { logOutUser } from "../controllers/logIn/logOutController.js";
import { protectedRoute } from "../token/protectedRoute.js";
import { getUserAfterTokens } from "../token/getUserAfterTokens.js";
import { addNotification } from "../controllers/logIn/addNotificationController.js";
import { AddUser } from "../controllers/user/AddUser.js";
const router = express.Router();
router.post("/Add-user", AddUser);
router.post("/auth", LoginUser);
router.post("/logout", logOutUser);
router.get("/protectedRoute", protectedRoute, getUserAfterTokens);
router.post("/add-notification", addNotification);

export default router;
