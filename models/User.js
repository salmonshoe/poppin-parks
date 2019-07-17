const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    // 'reviews' is an array that stores a ObjectIds
    // The ref property links the ObjectId to the Review model
    // We can populate the User with any associated Reviews 
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId, // acts as the 'foreign key' relationship associate for reviews into users. Reviews are an array of values in this case.
            ref: "Review"
        }
    ]
});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
//Check if a unhashed password entered is the same to one stored in database
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;