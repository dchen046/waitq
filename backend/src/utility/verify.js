// Format of token
// Authorization: Bearer <token>
export const verifyToken = (req, res, next) => {
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