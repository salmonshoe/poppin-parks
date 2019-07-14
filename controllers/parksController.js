const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Park
            .find(req.query)
            .sort({ dat: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Park
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body);
        db.Park
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(422).json(err));
    }
}