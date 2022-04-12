# Jot It!

This project is a simple chat app following the [Realtime Chat App | React, GraphQL & Websockets](https://youtu.be/E3NHd-PkLrQ) Traversy Media tutorial. Jack's original GitHub code can be found [here](https://github.com/jherr/chat-o-matic.git).

## To Do:

-   [ ] Figure out how to get the webpack error to go away.
<!-- - [ ] Set up uuid to get automatic user IDs.
-   [ ] Enable the following features:
    -   [ ] Usernames
    -   [ ] Message date/time stamps
    -   [ ] Photo/video uploads
    -   [ ] Profile photos
    -   [ ] Create app logo -->

## Required Setup To Create the App from Scratch:

-   __In client directory:__

    -   Run the following commands from a terminal:
        -   `npx degit https://github.com/jherr/wp5-starter-react.git#main client` _(__IMPORTANT NOTE__: Run this from the root directory and then run `cd client`)_
            -   This command will clone the starter React app from Jack's GitHub repository and save it to the client folder.
            -   It's important to use his starter app because of webpack and babel.
        -   `npm install` (installs all the project dependencies)
        -   `npm install --save-dev webpack`
        -   `npm i shards-react` (Can skip this step if you run into errors because this is just a styles library)
        -   `npm install @apollo/client graphql` (Handles the graphQL → React communication)
    -   Complete the following steps: 
        - Add the following lines of code to `App.js` _(only if you are using shards-react)_.
            ```
            import { Alert } from "shards-react";

            import "bootstrap/dist/css/bootstrap.min.css";
            import "shards-ui/dist/css/shards.min.css"
            ```
        - If you run into webpack errors:
            - Add the following lines of code to `webpack.config.js` if you run into webpack errors (can be added at the bottom of the file):
                ```
                externals: {
                    react: "React",
                },
                ```
            - Modify the following line of code in `.babelrc`:
                ```
                "presets": ["@babel/preset-react", "@babel/preset-env"],
                ```
                to:
                ```
                "presets": [
                    [ "@babel/preset-react", {
                        "runtime": "automatic"
                        }
                    ]
                ]
                ```

-   __In server directory:__
    -   Run the following commands from a terminal:
        -   `npm init -y`
        -   `npm i graphql`
        -   `npm i graphql-yoga`
        -   `set NODE_ENV=development` (to see unmasked errors in graphiql UI)
    -   Complete the following steps:
        -   Add the following line of code in the `"scripts"` section of `package.json`: `"start": "node server.js",`.
        -   Change `"main": "index.js",` in `package.json` to `"main": "server.js",`.
        -   Create the `server.js` file.

__Note__: If you want to make sure your server is running: 1. From a terminal in the server directory run `npm start`. 2. Once started, click the link provided in the terminal to open the graphiql UI.

## Available Scripts under \client

In the \client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Available Scripts under \server

In the \server directory, you can run:

### `npm start`

Runs the GraphQL server.\
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to run graphiql UI.
