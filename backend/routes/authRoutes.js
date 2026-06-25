import express from "express";
import { login, logout, signup, verifyEmail } from "../controllers/authController.js";
import loginLimit from "../middlewares/loginLimit.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify/:token", verifyEmail);
router.post("/login", loginLimit, login);
router.post("/logout", protectRoute, logout);


export default router;