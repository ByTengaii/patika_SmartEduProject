const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const pageRooter = require('./routes/pageRoutes');
const courseRooter = require('./routes/courseRoutes.js');
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

//* Middlewares
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//* ROUTES
app.use('/', pageRooter);
app.use('/courses', courseRooter);

app.listen(port, () => {
    console.log(`The application start at ${port}`);
});
