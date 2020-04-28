const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = require('./config').mongoURI;
const item = require('./api/routes/item');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err));
app.use('/item', item);
app.get('/', (req, resp) => {
    resp.send('Welcome to Restful API !!');
})

module.exports = app;