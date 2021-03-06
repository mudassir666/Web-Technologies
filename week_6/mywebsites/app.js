var createError = require('http-errors');
var express = require('express');                          //
var path = require('path');                                //
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');               //routes
var usersRouter = require('./routes/users');               //routes

var app = express();                                       //



//---------------------MOONGOOSE CONNECTION-----------

mongoose.connect("mongodb://localhost/productDb",
{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("CONNECTED TO DATABASE");
})
.catch(err=>{
    console.log("CANNOT CONNECTED TO DATABASE",err);
    process.exit();
});


//---------------------MOONGOOSE CONNECTION-----------

//////////////////////Body parser/////

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//////////////////////body parser///////


// view engine setup
app.set('views', path.join(__dirname, 'views'));           //
app.set('view engine', 'ejs');                             //

app.use(logger('dev'));
app.use(express.json());                                   //it is use insteaded of body parser like in week 5
app.use(express.urlencoded({ extended: false }));          //it is use insteaded of body parser like in week 5
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);                                 //routes been used
app.use('/users', usersRouter);                            //routes been used

// catch 404 and forward to error handler
app.use(function(req, res, next) {                            //
  next(createError(404));                                    //
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);                            // server error
  res.render('error');
});

module.exports = app;
