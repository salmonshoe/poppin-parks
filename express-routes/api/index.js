const router = require('express').Router();
const userRoutes = require('./users');
const parkRoutes = require('./parks');
const reviewRoutes = require('./reviews');

// User routes
router.use('/users', userRoutes);
router.use('/parks', parkRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;