import bcrypt from "bcryptjs";
import { addUser, addBusiness } from "../db/queries.js";

// return true if user was registered
export const register = async (username, password, businessName) => {
    const hashed_pass = await bcrypt.hash(password, 10);
    const user = await addUser(username, hashed_pass);
    const business = await addBusiness(businessName, user.id);
    return user && business;
}