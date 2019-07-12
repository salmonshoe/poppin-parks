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
    location: {
        type: Object,
        required: true
    }
});

const Park = mongoose.model('Park', ParkSchema);

module.exports = Park;