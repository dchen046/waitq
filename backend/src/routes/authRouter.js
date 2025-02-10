import { Router } from "express";
// import passport from "passport";
const authRouter = Router();

authRouter.post('/login', (req, res) => {
    console.log("Logged In");
})

export default authRouter;