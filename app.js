var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Differents types of works
var album = require('./routes/album');
var book = require('./routes/book');
var game = require('./routes/game');
var movie = require('./routes/movie');
var serie = require('./routes/serie');

var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));




app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/albums', express.static(path.join(__dirname, 'dist')));
app.use('/album', album);
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);
app.use('/games', express.static(path.join(__dirname, 'dist')));
app.use('/game', game);
app.use('/movies', express.static(path.join(__dirname, 'dist')));
app.use('/movie', movie);
app.use('/series', express.static(path.join(__dirname, 'dist')));
app.use('/serie', serie);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


