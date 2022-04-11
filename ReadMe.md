# SNIPPETS

This project is a simple chat app following the [Realtime Chat App | React, GraphQL & Websockets](https://youtu.be/E3NHd-PkLrQ) Traversy Media tutorial. Jack's original GitHub code can be found [here](https://github.com/jherr/chat-o-matic.git).

## To Do:
- [ ] Figure out how to get the webpack error to go away.
<!-- - [ ] Set up uuid to get automatic user IDs.
- [ ] Enable the following features:
    - [ ] Usernames
    - [ ] Message date/time stamps
    - [ ] Photo/video uploads
    - [ ] Profile photos
    - [ ] Create app logo -->

## Required Setup To Create the App from Scratch:
- In client directory:
    - Run the following commands from a terminal:
        - `npx degit https://github.com/jherr/wp5-starter-react.git\#main client` (IMPORTANT NOTE: Run this from the root directory and then run `cd client`)
            - This command will clone the starter React app from Jack's GitHub repository and save it to the client folder.
            - It's important to use his starter app because of webpack and babel.
        - `npm install --save-dev webpack`
        - `npm i shards-react` (Can skip this step if you run into errors because this is just a styles library)
        - `npm install @apollo/client graphql` (Handles the graphQL → React communication)
    - Complete the following steps:
        - Add the following lines of code to `App.js` (only if you are using shards-react).
            `
            import { Alert } from "shards-react";
 
            import "bootstrap/dist/css/bootstrap.min.css";
            import "shards-ui/dist/css/shards.min.css"
            `
        - Add the following lines of code to `webpack.config.js` if you run into webpack errors (can be added at the bottom of the file):
            `
            externals: {
                react: "React",
            },
            `

- In server directory:
    - Run the following commands from a terminal:
        - `npm init -y`
        - `npm i graphql`
        - `npm i graphql-yoga`
        - `set NODE_ENV=development` (to see unmasked errors in graphiql UI)
    - Complete the following steps:
        - Add the following line of code in the `"scripts"` section of `package.json`: `"start": "node server.js",`.
        - Change `"main": "index.js",` in `package.json` to `"main": "server.js",`.
        - Create the `server.js` file.

Note: If you want to make sure your server is running:
    1. From a terminal in the server directory run `npm start`.
    2. Once started, click the link provided in the terminal to open the graphiql UI.

## Available Scripts under \client

<!-- In the \client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it. -->

## Available Scripts under \server

In the \server directory, you can run:

### `npm start`

Runs the socket.io server as well as the mock API/web server that will serve up the `users.json` file.\
Socket.io will run on port [5000](http://localhost:5000) and mock API/web server will run on port [3001](http://localhost:3001) if no changes are made.