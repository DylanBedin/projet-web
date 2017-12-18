var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    published_year: String,
    publisher: String,
    genre: String,
    avis: [String],
    note: {type: Number, default: 0},
    nbVotants: {type: Number, default: 0},
    hasNoted: [String],
    updated_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Album', AlbumSchema);