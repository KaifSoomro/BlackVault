import express from "express";
import { login, signup, verifyEmail } from "../controllers/authController.js";
import loginLimit from "../middlewares/loginLimit.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify/:token", verifyEmail);
router.post("/login", loginLimit, login);


export default router;