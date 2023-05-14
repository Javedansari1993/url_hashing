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

## Run Locally

Clone the project

```bash
  git clone https://github.com/Javedansari1993/url_hashing
```

Go to the project directory

```bash
  cd url_hashing
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Quick Start

Node.js module should be installed in your machine befor download the project and run this command

```bash
  npm install
```
Start the server:
```bash
  npm start
```
  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`BASE_URL`


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## AWS deploment link

-  I have also deployed on AWS and you can visit on this link `http://hashingurl-env-1.eba-57zb3rra.ap-south-1.elasticbeanstalk.com/` in your browser. and test it work or not.

## Acknowledgements

The URL Hashing System utilizes various open-source libraries and frameworks. We would like to acknowledge the following:

- Express: [Link to Express](https://expressjs.com/)
- EJS: [Link to EJS](https://ejs.co/)
- Crypto: [Link to Crypto](https://nodejs.org/api/crypto.html)
