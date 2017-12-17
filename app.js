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
app.use(bodyParser.json());


app.use('/albums', album);
app.use('/books', book);
app.use('/games', game);
app.use('/movies', movie);
app.use('/series', serie);
app.use('/users',user);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


var port = 4200
var server = app.listen(port, function () {
    console.log("connection successfull", port)
});

//module.exports = app;


