var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const fileUpload = require('express-fileupload');
var mongoose = require('mongoose');

var addRecipeRouter = require('./routes/addNew');
var searchRecipeRouter = require('./routes/search');
var allRecipes = require('./routes/showRecipes');
var app = express();
app.listen(process.env.PORT || 3002);

// database
var dev_db_url = 'mongodb+srv://Tala:natalka123@cluster0.tfyy5.mongodb.net/recipe_app?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '../recipes-api/build')));
app.use(express.static(path.resolve(__dirname, '../recipes-api/build')));
console.log("in server app.js");
app.use(fileUpload())
//tu nizej była tylko sama gwiazdka
app.get('/*', (req, res) => {
  //res.sendFile(path.join(__dirname, '../recipes-api/build/index.html'));
  console.log("backend /* w app.js")
  res.sendFile(path.resolve(__dirname, '../recipes-api/build', "index.html"));
});

app.use('/add', addRecipeRouter);
app.use('/search', searchRecipeRouter);
app.use('/all', allRecipes);

//error handler's below
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found'
  });
});
app.use((err, req, res) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
