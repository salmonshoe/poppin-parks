const LocalStrategy = require('passport-local'); // Bring in Local strategy
const mongoose = require('mongoose'); // Bring in Mongoose to check login info matches
const bcrypt = require('bcryptjs'); // Tp decrypt the has and make sure passwords match

// Local User Model
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, ( email, password, done ) => {
            // Match User to check if there is a User with an existing email and password
            User.findOne({ email: email })
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'That email is not registered' })
                    }

                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch === true) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Password Incorrect' });
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );
    // Under Passport.js Sessions, we authenticate user credentials during login requests. Read docs for further explanation
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}
