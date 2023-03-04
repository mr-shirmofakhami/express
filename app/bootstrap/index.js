const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParse = require('body-parser');

module.exports = app => {
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({extended: false}));
    app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '../views'));
    app.use('/static', express.static(path.join(__dirname, '../../public')));
};