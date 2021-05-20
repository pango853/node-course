Udemy
The Complete Node.js Developer Course (3rd Edition)

# Memo

- node.js is a runtime of JavaScript
- `global`
- `process.exit()`
- event-driven, non-blocking I/O model
- search for npm modules at npmjs.com
	> npm init -y
	> npm install validator@13.6.0
- debugger via `node inspect`, DevTools(chrome://inspect)
	TIPS: `esc` key to show console on chrome DevTools
- Asynchronous process flow: setTimeout(..., 2000) at Call Stack-> register via `Node APIs` (afterward C++ world) -> hand over to Callback Queue -> Event Loop then move Callback to Call Stack and get called (back to js)
- `request` is not deprecated. Now it's fork is `postman-request`
- create web server with `express`, expressjs.com
	> npm install express --save
- nodemon by default will only restart when there is any .js file got changed
	> npm src/app.js -e js,hbs

# Setup
```
// Install global modules
npm install nodemon@1.18.5 -g

cd notes-app
	npm install

	node app-example.js
	nodemon app-example.js

	node app.js --version
	node app.js --help
	node app.js add --title="My First Note" --body="This is my first note."
	node app.js remove --title="My First Note"

	node inspect app.js add --title="My First Note" --body="This is my first note."
		debug> restart
	node --inspect-brk app.js add --title="My First Note" --body="This is my first note."

cd ../playground
	node 1-json.js

cd ../weather-app
	npm install
	node app.js YOUR_WEATHERSTACK_ACCESS_KEY YOUR_MAPBOX_ACCESS_TOKEN "Kuala Lumpur"

```

# TODO
Styling the Application

Accessing API from Browser
The Query String
Building a JSON HTTP endpoing
ES6 Aside: Default Function Pasrameters
Browser HTTP Requests with Fetch
Creating a Search Form
Wiring up the User Interface
Application Deployment
Joining Heroku and GitHub
Exploring Git
Integrating Git
Deploying Node.js to Heroku
New Feature Deployument Workflow
Avoiding Global Modules
MongoDB and Promises for a Task App
MongoDB and NoSQL Databases
Installing Database GUI Viewer
Connecting and inserting documents
The ObjectID
Querying documents
Promises
Updating documents
Deleting documents
REST APIs and Mongoose
Data validation and sanitization
Structuring a REST API
Installing Postman
Resource creation endpoints
Promise chaining
Async/Await
Resource Updating Endpoints
Resource Deleting Endpoints
Separate Route Files
API Authentication and Security
Storing, Pagination, and Filtering
File Uploads
Sending Emails
Testing Node.js
Real-Time Web Application with Socket.io
