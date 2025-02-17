import { Router } from "express";
import jwt from 'jsonwebtoken';

const pRouter = Router();



// Format of token
// Authorization: Bearer <token>
const verifyToken = (req, res, next) => {
    // get auth header
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        next();
    } else {
        res.sendStatus(403);
    }
}

pRouter.post("/post", verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, (err, user) => {
        if (err) res.sendStatus(403);
        else {
            res.json( {
                message: 'Post Created',
                user
            });
        }
    })
});


export default pRouter;