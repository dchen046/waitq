import { Router } from "express";
import { getAllUsers } from "../db/queries.js";

const authRouter = Router();

authRouter.get('/', async (req, res) => {
    const users = await getAllUsers();
    console.log(users);
    res.send("Users gotten");
});

export default authRouter;