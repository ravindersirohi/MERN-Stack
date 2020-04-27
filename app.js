const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.get('/', (req, resp) => {
    resp.send('Welcome to Restful API !!');
})

module.exports = app;