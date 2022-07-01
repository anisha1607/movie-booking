const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    username: {
        type: String 
    },
    moviename: {
        type: String
    },
    seating: {
        type: String
    }
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;