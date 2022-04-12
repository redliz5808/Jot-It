# Jot It!

This project is a simple chat app following the [Realtime Chat App | React, GraphQL & Websockets](https://youtu.be/E3NHd-PkLrQ) Traversy Media tutorial. Jack's original GitHub code can be found [here](https://github.com/jherr/chat-o-matic.git). _Please note: The commands listed below are for Windows machines. If using another system, you will need to find their equivalents for your system._

## To Do:

- [x] Figure out how to get the webpack error to go away. (__Hint__: Don't forget the `return` keyword!!!🤦‍♀️)
- [ ] Get rid of the CORS error.
<!-- -   [ ] Enable the following features:
    -   [ ] Usernames
    -   [ ] Message date/time stamps
    -   [ ] Photo/video uploads
    -   [ ] Profile photos
    -   [ ] Create app logo -->

## Required Setup To Create the App from Scratch:

- __In the root directory:__
    - Run the following commands from a terminal:
        - `npm install --global yarn` (if yarn is not already installed on your machine. To see if yarn is installed, run `yarn -v`.)
        - `mkdir server` (once the directory is made, run `cd server` and continue the setup).
        - `npx degit https://github.com/jherr/wp5-starter-react.git#main client` (once the directory is made, run `cd client` and continue the setup).
            -   This command will clone the starter React app from Jack's GitHub repository and save it to the client folder.
            -   It's important to use his starter app because of his webpack and babel setup files.

-   __In client directory:__
    -   Run the following commands from a terminal:
        -   `yarn` (installs all the project dependencies)
        -   `yarn add shards-react` (Can skip this step if you run into errors because this is just a styles library)
        -   `yarn add @apollo/client graphql` (Handles the graphQL → React communication)
    -   Complete the following steps: 
        - Add the following lines of code to `App.js` _(only if you are using shards-react)_.
            ```
            import { Alert } from "shards-react";

            import "bootstrap/dist/css/bootstrap.min.css";
            import "shards-ui/dist/css/shards.min.css"
            ```

-   __In server directory:__
    -   Run the following commands from a terminal:
        -   `npm init -y`
        -   `npm i graphql`
        -   `npm i graphql-yoga`
        -   `set NODE_ENV=development` (to see unmasked errors in graphiql UI)
    -   Complete the following steps:
        -   Add the following line of code in the `"scripts"` section of `package.json`: 
            ```
            "start": "node server.js",
            ```
        -   Change the following line in `package.json`:
            ```
            "main": "index.js",
            ```
            to:
            ```
            "main": "server.js",
            ```
        - If you run into issues with CORS:
            - Add the following lines of code above `server.start` line of code in `server.js`:
                ```
                const options = {
                    port: 4000,
                    cors: {
                        credentials: true,
                        origin: ["http://localhost:8080"], // your frontend url.
                    },
                };
                ```
            - Change the following lines in `server.js`:
                ```
                server.start(({ port }) => {
                    console.log(`Server on http://localhost:${port}/`);
                });
                ```
                to:
                ```
                server.start(options, ({ port }) => {
                    console.log(`Server on http://localhost:${port}/`);
                });
                ```

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
