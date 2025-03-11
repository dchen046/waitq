import { Router } from "express";
import { register } from "../controllers/signupController.js";

const signupRouter = Router();

signupRouter.post('/', async (req, res) => {
    const { email, password, businessName } = req.body;
    console.log(`${email} : ${password} : ${businessName}`);
    const hasRegistered = await register(email, password, businessName);
    if(hasRegistered) {
        const msg = {
            status: true,
            msg: "You have registered!"
        }
        res.status(200).json(msg);
    } else {
        res.status(409).send('failed to register');
    }
})


export default signupRouter;