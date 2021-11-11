var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var pen = require("./models/pen");

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// server start
async function recreateDB() {
  // Delete everything
  await pen.deleteMany();
  let instance1 = new
  pen({
    Brand: "Montex",
    price: 15,
    color: "Black"
  });
  let instance2 = new
  pen({
    Brand: "Parker",
    price: 10,
    color: "Red"
  });
  let instance3 = new
  pen({
    Brand: "Reynolds",
    price: 7,
    color: "Blue"
  });  
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}

var penRouter = require('./routes/pen');
var AddModsRouter = require('./routes/AddMods');
var SelectorRouter = require('./routes/Selector');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resourceRouter = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/pen', penRouter);
app.use('/AddMods', AddModsRouter);
app.use('/Selector', SelectorRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
