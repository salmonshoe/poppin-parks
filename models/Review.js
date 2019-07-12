const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user_id: {
        type: String
        // Have it associate to the user posting a review
    },
    park_id: {
        type: String
        // Have it associate to the park getting reviewed
    },
    review: {
        type: String
    },
    rating: {
        type: Number
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;