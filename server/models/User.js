var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    albumsCollection: Array,
    booksCollection: Array,
    gamesCollection: Array,
    moviesCollection: Array,
    seriesCollection: Array,
    albumsEnvies: Array,
    booksEnvies: Array,
    gamesEnvies: Array,
    moviesEnvies: Array,
    seriesEnvies: Array,
});

module.exports = mongoose.model('User', UserSchema);