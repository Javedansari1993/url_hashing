# URL Hashing System

The URL Hashing System is a web application designed to address the challenges faced by NewsBytes' marketing department when using long URLs with UTM tracking. These URLs often get ruined by formatters when shared in emails, sheets, and documents. The objective of this system is to provide a solution that allows the marketing department to overcome these problems primarily.

## Architecture Choice and Reasoning

For implementing the URL Hashing System, we have chosen to use the following technologies and architectural pattern:

- **Express**: We have opted for the Express web framework for Node.js due to its simplicity and flexibility. Express provides a robust set of features for building web applications and APIs, making it suitable for our needs.

- **Node.js**: We have chosen Node.js as the runtime environment for our application. Node.js is known for its scalability and non-blocking I/O model, which allows us to handle a large number of concurrent requests efficiently.

- **EJS template engine**: We have utilized the EJS (Embedded JavaScript) template engine for rendering dynamic views. EJS enables us to embed JavaScript code into HTML templates, making it easier to generate HTML pages with dynamic content.

- **MVC pattern**: The URL Hashing System follows the MVC (Model-View-Controller) architectural pattern. This pattern provides clear separation of concerns and promotes code organization, modularity, and reusability.

### Benefits of using the MVC pattern:

- **Separation of concerns**: By separating the code into Models, Views, and Controllers, we achieve a clear separation of responsibilities. This makes the codebase easier to understand, maintain, and extend.

- **Code organization**: The MVC pattern helps us organize the codebase into logical modules, facilitating navigation and reducing code duplication. This promotes reusability and maintainability.

- **Scalability**: With the MVC pattern, different components can be modified or replaced independently, enabling scalability and flexibility. It allows us to handle future changes or additions to the system more effectively.

## Getting Started

To set up and run the URL Hashing System, follow these steps:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Start the application using `node app.js`.
4. Access the URL Hashing System by visiting `http://localhost:3000` in your browser.

## Acknowledgements

The URL Hashing System utilizes various open-source libraries and frameworks. We would like to acknowledge the following:

- Express: [Link to Express](https://expressjs.com/)
- EJS: [Link to EJS](https://ejs.co/)
- Crypto: [Link to Crypto](https://nodejs.org/api/crypto.html)
