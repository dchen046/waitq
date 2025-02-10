import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs'
import { getUserByEmail } from './db/queries.js';


const passportInit = (passport) => {
    const authUser = async (email, password, done) => {
        try {
            const user = await getUserByEmail(email);
            if (!user) {
                return done(null, false, { message: "No user with that email" });
            }
            if (!await bcrypt.compare(password, user.password)) {
                return done(null, false, { message: "Wrong password" });
            } else {
                return done(null, user);
            }
        } catch (err) {
            done(err);
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authUser));

    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser(async (username, done) => {
        try {
            const user = await getUserByEmail(username);
            done(null, user);
        } catch (err) {
            done(err);
        }
    });
}

export default passportInit;