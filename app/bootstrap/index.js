const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

module.exports = app => {
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(session({
        secret: 'kjbdfuy1uy4g18373ryirq2wefef',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }));
    app.use(flash());
    app.engine('handlebars', hbs.engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '../views'));
    app.use('/static', express.static(path.join(__dirname, '../../public')));
};