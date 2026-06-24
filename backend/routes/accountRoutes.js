import express from "express";
import { addAccount, unlockVault } from "../controllers/accountController.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/add", protectRoute, addAccount);
router.post("/unlock", protectRoute, unlockVault);

export default router;