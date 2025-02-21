import { Router } from "express";
import jwt from 'jsonwebtoken';
import { verifyToken } from "../utility/verify.js";
import { addWaitlist } from "../db/queries.js";
import { formatTime } from "../utility/time.js";

const waitlistRouter = Router();


waitlistRouter.post("/add-waitlist", verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, user) => {
        if (err) res.sendStatus(403);
        else {
            const date = formatTime(req.body.time);
            console.log(date);

            const [error, entry] =
                await addWaitlist(
                    req.body.name,
                    req.body.size,
                    date,
                    req.body.phone,
                    req.body.b_name
                )
            if (error) {
                console.log(error);
            }
            else {
                console.log(entry);
                res.sendStatus(200);
            }
        }
    })
});

waitlistRouter.post("/add-reservation", verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, (err, user) => {
        if (err) res.sendStatus(403);
        else {
            res.json({
                message: 'Post Created',
                user
            });
        }
    })
});


export default waitlistRouter;