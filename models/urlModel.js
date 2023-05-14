const crypto = require('crypto');
const { BASE_URL } = require('../helper/constant');

class URLModel {
  constructor() {
    this.urlMapping = {};
  }

  generateHashedURL(url) {
    const hash = crypto.createHash('sha256').update(url).digest('hex');
    const hashedURL = BASE_URL+`/${hash}`;
    this.urlMapping[hash] = url;
    return hashedURL;
  }

  getOriginalURL(hash) {
    return this.urlMapping[hash];
  }
}

module.exports = URLModel;
