const mongoose = require('mongoose');

const SeatingSchema = new mongoose.Schema({
    moviename: {
        type: String
    },

    booked: {
        type: [String] 
    }
});

const Seats = mongoose.model('Seats', SeatingSchema);

module.exports = Seats;