Udemy
The Complete Node.js Developer Course (3rd Edition)

# Memo

- node.js is a runtime of JavaScript
- `global`
- `process.exit()`
- event-driven, non-blocking I/O model
- search for npm modules at npmjs.com
	> npm install validator@13.6.0
- debugger via `node inspect`, DevTools(chrome://inspect)
	TIPS: `esc` key to show console on chrome DevTools


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
