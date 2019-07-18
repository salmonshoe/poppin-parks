const db = require('../models');

module.exports = {
    // Log In a user
    login: (req, res) => {
        console.log(req.body);
        db.User.findOne({
            email: req.body.email,
            password: req.body.password
        })
            .then(
                res.json({
                    "success": true
                })
            )
            .catch(err => {
                if (err) return console.log(err)
                else {
                    return;
                }
            })
    }
}