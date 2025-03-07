import jwt from 'jsonwebtoken';
import { addWaitlist, confirmReservation, getReservations, removeReservation } from "../db/queries.js";
import { formatTime, getTodaysRange } from "../utility/time.js";
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { sendEmail } from '../utility/sendEmail.js';

export const addToWaitlist = (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, user) => {
        if (err) res.sendStatus(403);
        else {
            const date = formatTime(req.body.time);

            const [error, entry] =
                await addWaitlist(
                    req.body.name,
                    req.body.size,
                    date,
                    req.body.phone,
                    req.body.email,
                    req.body.b_name,
                    req.body.notes
                )
            if (error) {
                console.log(error);
            }
            else {
                // console.log(entry);
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
                // console.log(reservations);
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

export const notifyResEmail = (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, user) => {
        console.log('inside resemail');
        const name = req.body.name;
        const email = req.body.email;
        await sendEmail(email);
        console.log(`finished sending email to ${name}`);
    });
}



// export const notifyRes = (req, res) => {
//     jwt.verify(req.token, process.env.JWT_KEY, async (err, user) => {
//         const params = {
//             Message: "Hello this is a test",
//             PhoneNumber: process.env.PHONE,
//             MessageAttributes: {
//                 'AWS.SNS.SMS.SMSType': {
//                     DataType: 'String',
//                     StringValue: 'Transactional'
//                 }
//             }
//         }

//         const sns = new SNSClient({
//             region: process.env.REGION,
//             credentials: {
//                 accessKeyId: process.env.AWS_ACCESS_KEY,
//                 secretAccessKey: process.env.AWS_SECRET_KEY
//             }
//         })
//         const message = await sendSNSMessage(sns, params);
//         console.log(message);
//     })
// }

// const sendSNSMessage = async (sns, params) => {
//     const command = new PublishCommand(params);
//     const message = await sns.send(command);
//     return message;
// }