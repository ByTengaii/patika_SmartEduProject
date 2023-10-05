const express = require('express');

const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.status(200).send('Index Page');
});

app.listen(port, () => {
    console.log(`The application start at ${port}`);
});