import jwt from 'jsonwebtoken';
import { addWaitlist, confirmReservation, getReservations, removeReservation } from "../db/queries.js";
import { formatTime, getTodaysRange } from "../utility/time.js";


export const addToWaitlist = (req, res) => {
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
    });
}

export const getTodaysReservations = (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, user) => {
        if (err) res.sendStatus(403);
        else {
            const [start, end] = getTodaysRange();
            const [error, reservations] = await getReservations(start, end);
            if (error) {
                console.log(error);
            } else {
                console.log(reservations);
                res.json({
                    reservations
                })
            }
        }
    });
}

export const deleteReservation = (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, user) => {
        const phone = req.params.phone;
        const [error, entry] = await removeReservation(phone);
        if (error) {
            console.log(error);
        } else {
            console.log(entry);
            res.sendStatus(200);
        }
    })
}

export const confirmRes = (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, user) => {
        const phone = req.params.phone;
        const [error, entry] = await confirmReservation(phone);
        if (error) {
            console.log(error);
        } else {
            console.log(entry);
            res.sendStatus(200);
        }
    })
}