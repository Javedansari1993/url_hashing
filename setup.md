# Setup

This guide provides step-by-step instructions for deploying and using the URL Hashing System on AWS Elastic Beanstalk.


## Deployment Steps

- Create an Elastic Beanstalk application:
- Log in to the AWS Management Console.
- Go to the Elastic Beanstalk service.
- Click "Create a new environment" and select "Web server environment."
- Follow the on-screen instructions to configure your environment, including platform, environment type, and other settings.
- Upload the application code by selecting the option to upload a ZIP file or directly from the command line using the AWS CLI.

1. Configure the environment variables:
- In the Elastic Beanstalk management console, navigate to our environment's configuration.
- Go to the "Software" section and click "Edit."
- Add the necessary environment variables for your application, such as database connection details or API keys.

- Click "Apply" to save the changes.
2. Deploy the application:
- Go to the "Versions" page in the Elastic Beanstalk management console.
- Click "Upload" and select the ZIP file containing the application code.
- Once the deployment is complete, Elastic Beanstalk will automatically launch the application.

## Usage

Once the URL Hashing System is deployed and running, I can access it by visiting the application URL provided by Elastic Beanstalk.

1. Open your web browser and enter the application URL.

2. Use the web interface to generate hashed URLs for your original URLs.


## AWS deploment link

- you can visit on this link `http://hashingurl-env-1.eba-57zb3rra.ap-south-1.elasticbeanstalk.com/` in your browser. and test it

## Tests

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

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

The test suite includes unit tests and integration tests to ensure the functionality and correctness of the system.
Note: Before running the tests, make sure to configure the necessary environment variables for the test environment. You can specify the test environment variables in a separate configuration file or use a testing framework like `dotenv` to manage environment variables during testing.

The test results will be displayed in the console, indicating the success or failure of each test case.

Feel free to add additional test cases as needed to validate the behavior of the URL Hashing System.

---

With these steps, I am able to deploy and use the URL Hashing System on AWS Elastic Beanstalk, as well as run tests to ensure its functionality.

Happy deploying and testing!
