import express from "express";
import { addAccount, getAccounts, unlockVault } from "../controllers/accountController.js";
import { protectRoute } from "../middlewares/protectRoute.js";
import { checkVaultAccess } from "../middlewares/checkVaultAccess.js";

const router = express.Router();

router.post("/add", protectRoute, addAccount);
router.get("/accounts", protectRoute, checkVaultAccess, getAccounts);
router.post("/unlock", protectRoute, unlockVault);

export default router;