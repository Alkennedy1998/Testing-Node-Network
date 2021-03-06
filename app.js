var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs = require('ejs');

//Possibly remove later
const fs = require("fs");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var uploadRouter = require('./routes/uploader');
var streamingRouter = require ('./routes/streaming');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload',uploadRouter);

app.use('/streaming',streamingRouter);


module.exports = app;
