const router = require('express').Router();
const parksController = require('../../controllers/parksController');

// For connecting to '/api/parks/'
router.route('/')
    .get(parksController.findAll)
    .post(parksController.create);

// For connection to '/api/parks/:id'
router.route('/:id')
    .get(parksController.findById)
    .post(parksController.create);

module.exports = router;