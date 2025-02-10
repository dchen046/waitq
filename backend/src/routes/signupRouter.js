import { Router } from "express";
import { register } from "../controllers/signupController.js";

const signupRouter = Router();

signupRouter.get('/', async (req, res) => {
    const name = 'testing';
    const pass = '1234';
    const hasRegistered = await register(name, pass);
    if(hasRegistered) {
        res.send('registered');
    } else {
        res.send('failed to register');
    }
})


export default signupRouter;