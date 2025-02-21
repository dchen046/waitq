import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
import { getBusinesses } from "../db/queries.js";
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
                            expiresIn: process.env.JWT_EXP
                        }
                        jwt.sign({ user }, process.env.JWT_KEY, options, async (err, token) => {
                            // console.log(token);
                            const [qerr, businesses] = await getBusinesses(user.id);
                            if (qerr) {
                                res.sendStatus(400);
                            } else {
                                res.json({
                                    token,
                                    email: user.email,
                                    businesses: businesses
                                });
                            }
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