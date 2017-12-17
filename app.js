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

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://userweb2017:pwdweb2017@ds059546.mlab.com:59546/dbweb2017', { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection succesful BD mlab.com'))
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


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


var port = 3000
var server = app.listen(port, function () {
    console.log("connection successfull", port)
});

//module.exports = app;


