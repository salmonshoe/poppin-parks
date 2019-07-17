const db = require('../models');
const User = db.User;
const UserSession = db.UserSession;
const passport = require('../config/passport');
const bcrypt = require('bcryptjs');

module.exports = {
    signup: function (req, res, next) {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body

        if (!firstName) {
            return res.send({
                success: false,
                message: 'Error: First name cannot be blank'
            });
        } else if (!lastName) {
            return res.send({
                success: false,
                message: 'Error: Last name cannot be blank'
            });
        } else if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank'
            });
        } else if (!password) {
            return res.send({
                success: false,
                message: 'Error: password cannot be blank'
            });
        }

        email = email.toLowerCase();
        db.User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Account alreay exists.'
                });
            }

            // Save a new user
            const newUser = new User();

            newUser.firstName = firstName
            newUser.lastName = lastName
            newUser.email = email
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server Error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up'
                });
            });
        });
    },
    signin: function (req, res, next) {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;

        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        } else if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }

        email = email.toLowerCase();

        // Find user and verify it matches the data of their account on the DB
        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                console.log('err 2', err);
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid password'
                });
            }

            // Otherwise correct user
            const userSession = new UserSession();

            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id //on login the doc will save the user's id for verification. It points back to the user id
                });
            });
        });
    },
    verify: function (req, res, next) {
        // Get the token
        const { query } = req;
        const { token } = query;
        // Verify thr token is one of a kind and 
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server Error'
                });
            }

            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else {
                return res.send({
                    success: true,
                    message: 'Verified!'
                });
            }
        });
    },
    logout: function (req, res, next) {
        // Read the token (?token=test)
        const { query } = req;
        const { token } = query;
        // Find one and update to track user logins
        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        }, {
                $set: { isDeleted: true }
            }, null, (err) => {
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Error: Server Error'
                    });
                }

                return res.send({
                    success: true,
                    message: 'Verified!'
                });

            });

    },

// PASSPORT 
    // register: (req, res) => {
    //     const { firstName, lastName, email, password } = req.body;
    //     let errors = [];

    //     User.findOne({ email: email })
    //         .then(user => {
    //             if (user) {
    //                 errors.push({ msg: 'Email is already registered' });
    //                 console.log(errors);
    //                 res.json(req.body);
    //             } else {
    //                 const newUser = new User({
    //                     firstName,
    //                     lastName,
    //                     email,
    //                     password
    //                 });

    //                 bcrypt.genSalt(10, (err, salt) =>
    //                 bcrypt.hash(newUser.password, salt, (err, hash) => {
    //                     if (err) throw err;
    //                     newUser.password = hash;
    //                     newUser.save()
    //                         .then(user => {
    //                             console.log(`Hello ${user} you are now registered and can log in`);
    //                         })
    //                         .catch(err => console.log(err));
    //                 }))
    //             }
    //         });
    // }

}