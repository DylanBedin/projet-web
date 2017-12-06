var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    published_year: String,
    publisher: String,
    producer: String,
    author: String,
    platforms: [String],
    updated_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Game', GameSchema);