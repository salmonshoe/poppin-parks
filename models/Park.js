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
    },
    // 'reviews' is an array that stores a ObjectIds
    // The ref property links the ObjectId to the Review model
    // We can populate the Park with any associated Reviews 
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId, // acts as the 'foreign key' relationship associate for reviews into parks. Reviews are an array of values in this case.
            ref: "Review"
        }
    ]

});

const Park = mongoose.model('Park', ParkSchema);

module.exports = Park;