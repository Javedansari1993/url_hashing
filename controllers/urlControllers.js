const URLModel = require('../models/urlModel');

const urlModel = new URLModel();

exports.getHomePage = (req, res) => {
  res.render('index');
};

exports.hashURL = (req, res) => {
  const originalURL = req.body.url;
  const hashedURL = urlModel.generateHashedURL(originalURL);
  res.render('hashed', { originalURL, hashedURL });
};

exports.redirectToURL = (req, res) => {
  const hash = req.params.hash;
  const originalURL = urlModel.getOriginalURL(hash);

  if (originalURL) {
    res.redirect(originalURL);
  } else {
    res.status(404).send('Hashed URL not found');
  }
};
