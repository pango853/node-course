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
```

# TODO
An HTTP Request Challenge
Handling Errors
The Callback Function
Callback Abstraction
Callback Abstraction Challenge
Callback Chaining
ES6 Aside: Object Property Shorthand
Destructuring and Property Shorthand
Bonus: HTTP Requests without a Library
