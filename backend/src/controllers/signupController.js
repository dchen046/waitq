import bcrypt from "bcryptjs";
import { addUser } from "../db/queries.js";

// return true if user was registered
export const register = async (username, password) => {
    const hashed_pass = await bcrypt.hash(password, 10);
    const user = await addUser(username, hashed_pass);
    if (user) return true;
    return false;
}