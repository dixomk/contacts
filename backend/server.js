const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const contactsRouter = require('./features/contacts/contacts.router');
const Contacts = require('./features/contacts/contacts.model');
const path = require('path');

mongoose.connect('mongodb://kostya:1029783rku@ds147789.mlab.com:47789/hair_care');

const config = {
    port: 3000,
    hostname: 'localhost'
};
const apiPrefix = '/api';
app.use(express.static('../frontend/dist/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(apiPrefix, contactsRouter);
app.get('*', function (req, res) {
    res.sendFile('index.html');
});
app.use(function(err, req, res, next){
    res.json(err);
});
app.listen(config);
