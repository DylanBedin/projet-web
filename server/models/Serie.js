var mongoose = require('mongoose');

var SerieSchema = new mongoose.Schema({
    title: String,
    author: String,
    channel: String,
    actors: [String],
    nb_seasons: Number,
    description: String,
    published_year: String,
    publisher: String,
    updated_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Serie', SerieSchema);