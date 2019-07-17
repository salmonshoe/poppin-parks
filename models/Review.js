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
    }
    // Unsure on where to asscoaite my models in their schemas. I believe the one to many relationships will have review Object Ids in the Users and Park model.
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;