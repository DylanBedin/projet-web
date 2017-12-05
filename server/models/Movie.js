var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    director: String,
    title: String,
    producer: String,
    writer: String,
    actors: [String],
    description: String,
    published_year: String,
    genre: String,
    updated_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Movie', MovieSchema);