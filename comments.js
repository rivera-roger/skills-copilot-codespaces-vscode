//Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

// Use bodyParser to parse JSON from clients
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Create a new comment
app.post('/comments', (req, res) => {
    console.log("Req body: ", req.body);
    res.send("Post comments");
}