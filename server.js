const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware definitions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (on Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here
app.get('/api/hello', (req, res) => {
    res.send('Hello World!');
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, (err) => {
    // if (err) throw err;
    console.log(`🌎 ==> API server listening on port ${PORT}`);
});