// import jwt from "jsonwebtoken";
// import bcrypt from 'bcryptjs';
// import { getUserByEmail } from "../db/queries.js";

// export const login = async (email, password) => {
//     const users = await getUserByEmail(email);
//     const user = users[0];
//     if (user) {
//         const match = bcrypt.compare(password, user.password)
//         if (match) {
//             const key = process.env.JWT_KEY;
//             jwt.sign({ user }, key, (err, token) => {
//                 resizeBy.json(token);
//             })
//         }
//         console.log(user);
//     }
// }

// const authenticate = async (pass, db_pass) => {
//     const match = bcrypt.compare(pass, db_pass)
//     return match;
// }