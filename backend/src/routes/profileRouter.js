import { Router } from "express";
import { verifyToken } from "../utility/verify.js";
import { updateProfile } from "../controllers/profileController.js";

const profileRouter = Router();

profileRouter.patch('/update', verifyToken, (req, res) => {
    updateProfile(req, res);
})

export default profileRouter;