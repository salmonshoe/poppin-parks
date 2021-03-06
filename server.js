const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const routes = require('./express-routes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

//================ PASSPORT =========================
// Passport Config
require('./config/passport')(passport);

// DB Config. Figure out the proper syntax for loading a local MongoDB. If fails, try to hard code the link to your local host db
const db = require('./config/keys').MongoURI;

// Mongo Connection
// mongoose.connect(db, { useNewUrlParser: true })
//     .then(() => console.log('Mongo Connected'))
//     .catch(err => console.log(err));

// Middleware definitions. Bodyparser and json format
app.use(express.urlencoded({ extended: false })); // To get data from forms through req.body. When to keep true and when to keep false?
app.use(express.json());

// Express Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Internal Server Middleware
const corsFn = cors({
    origin: '*',
    allowedHeaders: ['Content-Type']
});

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    corsFn(req, res, () => {
        next();
    })
});

// Connect flash middleware
app.use(flash());

// Global variables. Coming from flash, we create messages for users after registering
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})
//===========================================


// ================ ROUTES & REACT ====================

// Serve up static assets (on Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

// Routes here
app.use(routes);

// If deployed, use the deployed database, otherwise default to the local 
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/pianoRollDB"

// COnnect to the mongo db
mongoose.connect(db, { useNewUrlParser: true } || `mongodb://${process.env.MLAB_DBNAME}:${process.env.MLAB_PASSWORD}ds243054.mlab.com:43054/heroku_w46s2bnm`)
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.log(err));

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`🌎 ==> API server listening on port ${PORT}`);
});

