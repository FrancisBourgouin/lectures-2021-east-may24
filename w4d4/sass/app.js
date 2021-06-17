const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const sassMiddleware = require('node-sass-middleware');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sassMiddleware({
  /* Options */
  src: __dirname,
  dest: path.join(__dirname, 'public'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css'  // Where prefix is at <link rel="stylesheets" href="css/style.css"/>
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
