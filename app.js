var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Differents types of works
var album = require('./server/routes/album');
var book = require('./server/routes/book');
var game = require('./server/routes/game');
var movie = require('./server/routes/movie');
var serie = require('./server/routes/serie');
var user = require('./server/routes/user');

var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection succesful BD'))
.catch((err) => console.error(err));

// Create link to Angular build directory
var distDir = __dirname + "/dist/";

var app = express();

app.use(express.static(distDir));
// Initialise l'app.
app.use(bodyParser.json())

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

app.use('/users',user);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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


