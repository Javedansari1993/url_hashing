// models/urlModel.js
const crypto = require('crypto');

class URLModel {
  constructor() {
    this.urlMapping = {};
  }

  generateHashedURL(url) {
    const hash = crypto.createHash('sha256').update(url).digest('hex');
    const hashedURL = `https://example.com/${hash}`;
    this.urlMapping[hash] = url;
    return hashedURL;
  }

  getOriginalURL(hash) {
    return this.urlMapping[hash];
  }
}

module.exports = URLModel;
