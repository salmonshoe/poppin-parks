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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

bcrypt.genSalt(10, (err, salt) =>
    bcrypt.hash(UserSchema.password, salt, (err, hash) => {
        //Set password plain text to hashed
        UserSchema.password = hash;
    }))

const User = mongoose.model('User', UserSchema);

module.exports = User;