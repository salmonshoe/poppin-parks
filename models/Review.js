const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({

    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    // 'user' is an object that stores a User id
    // The ref property links the ObjectId to the User model associating our models
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;