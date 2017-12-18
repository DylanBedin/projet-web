var mongoose = require('mongoose');

var SerieSchema = new mongoose.Schema({
    title: String,
    director: String,
    actors: [String],
    published_year: String,
    avis: [String],
    note: {type: Number, default: 0},
    nbVotants: {type: Number, default: 0},
    hasNoted: [String],
    updated_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Serie', SerieSchema);