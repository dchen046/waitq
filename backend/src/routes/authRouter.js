import { Router } from "express";

const authRouter = Router();

// authRouter.get('/:username/:password', async (req, res) => {
//     const { username, password } = req.params;
//     const status = await authenticate(username, password);
// });

// authRouter.post('/', passport.authenticate('local', ))

export default authRouter;