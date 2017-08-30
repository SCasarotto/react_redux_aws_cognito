FC From Scratch AWS# react_redux_aws_cognito
# react_redux_aws_cognito

Basic usage of amazon-cognito-identity with modern javascript tooling, react, and the npm ecosystem.
You can use it as a boilerplate for your next kickass AWS-based ES6 serverless react/redux site.

## Getting Started

* Configure
* `npm install` to install dependencies
* `npm start` to start a development webserver
* `npm run build` to create an optimized static site, ready for deployment, in `webroot/`.

### Configure

1. Create an app for your user pool. Note that the generate client secret box must be **unchecked** because the JavaScript SDK doesn't support apps that have a client secret.
2. Add your AWS credentials into the settings file located /src/config/settings.js
3. Install all the dependencies with `npm install`
4. Run the app with `npm start`, and click the links.
5. Once you get your app working the way you want, run `npm run build` and deploy the `webroot/` folder on any static webhost (like S3 or whatever.)
