import express from "express";
import { addAccount } from "../controllers/accountController.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/add", protectRoute, addAccount);

export default router;