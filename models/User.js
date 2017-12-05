var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    albumsList: Array,
    booksList: Array,
    gameList: Array,
    moviesList: Array,
    seriesList: Array,
});

module.exports = mongoose.model('User', UserSchema);