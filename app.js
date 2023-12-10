//* FrameWorks
const express = require('express');
const session = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

//* ROUTERS
const pageRooter = require('./routes/pageRoutes');
const courseRooter = require('./routes/courseRoutes.js');
const categoryRooter = require('./routes/categoryRoutes');
const authRooter = require('./routes/authRoutes');

const port = 3000;

//* Template Engine
app.set('view engine', 'ejs');

//* Connection DB
mongoose
    .connect('mongodb://127.0.0.1:27017/smart_eduProject')
    .then(console.log('MongoDB connected'))
    .catch((err) => {
        console.error(err);
    });

//* Global Variables
global.userID = null;

//* Middlewares
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/smart_eduProject'})
}));

//* ROUTES
app.use("*",(req, res, next) => {
    userID = req.session.userID;
    next();
})
app.use('/', pageRooter);
app.use('/courses', courseRooter);
app.use('/categories', categoryRooter);
app.use('/users',authRooter);

app.listen(port, () => {
    console.log(`The application start at ${port}`);
});
