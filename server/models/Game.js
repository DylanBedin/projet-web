var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    published_year: String,
    developer : String,
    publisher: String,
    producer: String,
    genre: String,
    platforms: [String],
    avis: [String],
    note: {type: Number, default: 0},
    nbVotants: {type: Number, default: 0},
    hasNoted: [String],
    updated_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Game', GameSchema);