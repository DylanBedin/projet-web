var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    albumsList: Array,
    booksList: Array,
    gameList: Array,
    moviesList: Array,
    seriesList: Array,
});

module.exports = mongoose.model('User', UserSchema);