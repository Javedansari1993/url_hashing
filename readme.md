# URL Hashing System

The above code is a simple implementation of URL shortening service using Node.js and Express framework. It uses the SHA-256 hashing algorithm to generate a unique hash for the original URL, which is then used to construct a short URL.

## Architecture Choice and Reasoning

For implementing the URL Hashing System, we have chosen to use the following technologies and architectural pattern:

- **Express**: We have opted for the Express web framework for Node.js due to its simplicity and flexibility. Express provides a robust set of features for building web applications and APIs, making it suitable for our needs.

- **Node.js**: We have chosen Node.js as the runtime environment for our application. Node.js is known for its scalability and non-blocking I/O model, which allows us to handle a large number of concurrent requests efficiently.

- **EJS template engine**: We have utilized the EJS (Embedded JavaScript) template engine for rendering dynamic views. EJS enables us to embed JavaScript code into HTML templates, making it easier to generate HTML pages with dynamic content.

- **MVC pattern**: The URL Hashing System follows the MVC (Model-View-Controller) architectural pattern. This pattern provides clear separation of concerns and promotes code organization, modularity, and reusability.


## AWS deployment  link

-  I have also deployed on AWS and you can visit on this link `http://hashingurl-env-1.eba-57zb3rra.ap-south-1.elasticbeanstalk.com/` in your browser. and test it.

