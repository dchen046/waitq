import jwt from 'jsonwebtoken';
import { updateBusiness } from '../db/queries.js';

export const updateProfile = (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403);

        }
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;

        const [error, profile] = await updateBusiness(name, email, phone, address);
        if (error) {
            console.log(error);
        } else {
            res.json({
                profile
            });
            // res.sendStatus(200);
        }
    });
}