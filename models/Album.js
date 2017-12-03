var mongoose = require('mongoose');

var AlbumSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    published_year: String,
    publisher: String,
    genre: String,
    updated_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Album', AlbumSchema);