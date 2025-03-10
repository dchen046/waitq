import { Router } from "express";
import jwt from 'jsonwebtoken';
import { verifyToken } from "../utility/verify.js";
import { addToWaitlist, confirmRes, deleteReservation, getTodaysReservations, notifyByEmail } from "../controllers/waitlistController.js";

const waitlistRouter = Router();

waitlistRouter.post("/add-waitlist", verifyToken, async (req, res) => {
    addToWaitlist(req, res);
});

waitlistRouter.get('/today', verifyToken, (req, res) => {
    getTodaysReservations(req, res);
})

waitlistRouter.delete('/delete/:phone', verifyToken, (req,res) => {
    deleteReservation(req, res);
})

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

waitlistRouter.put("/confirm/:phone", verifyToken, (req, res) => {
    confirmRes(req, res);
})

waitlistRouter.post("/notify-email", verifyToken, (req, res) => {
    // notifyRes(req, res);
    notifyByEmail(req, res);
})

export default waitlistRouter;