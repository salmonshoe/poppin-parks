const router = require('express').Router();
const reviewsController = require('../../controllers/reviewsController');

// For connecting to '/api/reviews'
router.route('/')
    .get(reviewsController.findAll)
    .post(reviewsController.create);

router.route('/:id')
    .get(reviewsController.findById)
    .post(reviewsController.create)

module.exports = router;