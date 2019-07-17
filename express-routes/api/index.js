const router = require('express').Router();
const userRoutes = require('./users');
const parkRoutes = require('./parks');
const reviewRoutes = require('./reviews');
const accountRoutes = require('./account');
const authRoutes = require('./auth'); 

// User routes
router.use('/users', userRoutes);
router.use('/parks', parkRoutes);
router.use('/reviews', reviewRoutes);
router.use('/account', accountRoutes);
router.use('/auth', authRoutes);

module.exports = router;