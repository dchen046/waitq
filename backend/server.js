import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import session from 'express-session';
import passport from 'passport';
import './src/strategies/local.js';
import cors from 'cors';
import flash from 'express-flash'

// routers
import authRouter from './src/routes/authRouter.js';
import signupRouter from './src/routes/signupRouter.js';
import waitlistRouter from './src/routes/waitlistRouter.js';
import { addBusiness } from './src/db/queries.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// for public assets
app.use(express.static(__dirname + '/public'));

// cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
}
app.use(cors(corsOptions));

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// passport
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());

//app routes
app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/api/auth", authRouter);
app.use("/api/register", signupRouter);
app.use("/api/waitlist", waitlistRouter);
// app.use("api/business". businessRouter);

// app port
const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    // const [error, business] = await addBusiness('testb', 'test addr', '12345', '1@gmail.com', 1);
    // if (error) {
    //     console.log(error);
    // } else {
    //     console.log(business);
    // }
});
