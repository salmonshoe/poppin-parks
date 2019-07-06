// Store the Mongo connection string in this file
// In past class activities, this file was as the seedDB.js file inside a 'scripts' directory
const mongoose = require('mongoose');

const db = mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/poppinparks'
);

module.exports = db;

//Should probably export this module?
    // Something similar to this
/*module.exports = {
MongoURI: 'mongodb+srv://Rafael:CHStemple1300!@test-cluster-fpjhc.mongodb.net/test?retryWrites=true'
} */