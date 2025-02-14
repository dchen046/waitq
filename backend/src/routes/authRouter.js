import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
const authRouter = Router();

authRouter.post("/login", (req, res) => {
    passport.authenticate("local",
        (err, user, info) => {
            if (user) {
                // Login if user exists
                req.logIn(user, (error) => {
                    if (error) {
                        res.send(error);
                    } else {
                        console.log("Successfully authenticated");
                        const options = {
                            expiresIn: '30s'
                        }
                        jwt.sign({ user }, process.env.JWT_KEY, options, (err, token) => {
                            res.json({
                                token
                            });
                        });
                    };
                });
            } else {
                // bad credentials
                console.log(info.message);
                res.status(401).json({
                    err: info.message
                });
            };
        })(req, res);
});

authRouter.get('/login-fail', (req, res) => {
    console.log('login-failed')
    const msgs = req.session.messages;
    console.log(req.session);
})

export default authRouter;