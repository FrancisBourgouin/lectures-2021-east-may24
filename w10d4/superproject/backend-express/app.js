var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/api/login', (req, res) => {
  const userId = req.body.id
  db
    .query("SELECT * FROM users WHERE user.id = $1", [userId])
    .then(dbRes => dbRes.rows[0])
    .then(user => res.json(user))

})

module.exports = app;
