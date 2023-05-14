const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlController = require('./controllers/urlControllers');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Serve static files from the public directory
app.use(express.static('public'));

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Home page route
app.get('/', urlController.getHomePage);

// URL hashing route
app.post('/hash', urlController.hashURL);

// Redirect route for hashed URLs
app.get('/:hash', urlController.redirectToURL);

// Start the server
const port = process.env.PORT?process.env.PORT:3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
