const LocalStrategy = require('passport-local'); // Bring in Local strategy
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, ( email, password, done ) => {
            // Match User to check if there is a User with an existing email and password
            User.findOne({ email: email })
                .then(user => {
                    // If there is no user with the with the given email
                    if (!user) {
                        return done(null, false, { message: 'That email is not registered' });
                    }
                    // If there is a user with the given email, but the password is incorrect
                    else if (!user.validPassword(password)) {
                        return done(null, false, {
                            message: 'Incorrect Password.'
                        });
                    }
                    // If none of the above, return the user
                    return done(null, user);

                    // Match password
                    // bcrypt.compare(password, user.password, (err, isMatch) => {
                    //     if (err) throw err;
                    //     if (isMatch === true) {
                    //         return done(null, user);
                    //     } else {
                    //         return done(null, false, { message: 'Password Incorrect' });
                    //     }
                    // });
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
