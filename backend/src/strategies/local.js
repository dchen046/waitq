import passport from 'passport';
import LocalStrategy from 'passport-local';
import { getUserByEmail } from '../db/queries.js';
import bcrypt from 'bcryptjs';

passport.use(
    new LocalStrategy({
        usernameField: 'email',
    }, async (email, password, done) => {
        if (!email || !password) {
            return done(null, false, { message: "Missing Credentials" });
        }
        const user = await getUserByEmail(email);
        if (user === null) {
            return done(null, false, { message: "Invalid email" });
        } 
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return done(null, false, { message: "Invalid password" });
        } else {
            return done(null, user);
        }
        
    })
);

passport.serializeUser((user, done) => { done(null, user.email) });

passport.deserializeUser((email, done) => {
    try {
        const user = getUserByEmail(email);
        done(null, user);
    } catch (err) {
        done(err);
    }
});