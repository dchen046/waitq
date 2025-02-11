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

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// for public assets
app.use(express.static(__dirname + '/public'));

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

// cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
}
app.use(cors(corsOptions));

//app routes
app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/api/auth", authRouter);
app.use("/api/register", signupRouter);

// app port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
