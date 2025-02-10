import { Router } from "express";
import { register } from "../controllers/signupController.js";

const signupRouter = Router();

signupRouter.post('/:username/:password', async (req, res) => {
    const { username, password } = req.params;
    console.log(`${username} : ${password}`);
    const hasRegistered = await register(username, password);
    if(hasRegistered) {
        const msg = {
            status: true,
            msg: "You have registered!"
        }
        res.status(200).json(msg);
        console.log('rsg');
    } else {
        res.status(409).send('failed to register');
    }
})


export default signupRouter;