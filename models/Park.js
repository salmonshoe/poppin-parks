const mongoose = require('mongoose');

const ParkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    reminders: {
        type: String,
        required: false
    }
});

const Park = mongoose.model('Park', ParkSchema);

module.exports = Park;