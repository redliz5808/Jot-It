// Pull in graphQL from GraphQL-Yoga
const { createServer } = require("graphql-yoga");

const messages = [];

// Set up server schema (how the message will look)
// ! = required field
const typeDefs = `
    type Message {
        id: ID! 
        user: String!
        content: String!
    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
        postMessage(user: String!, content: String!): ID!
    }
`;

// resolvers get the data for the server
const resolvers = {
    Query: {
        messages: () => messages,
    },

    // Allows us to test the server.
    Mutation: {
        postMessage: (parent, { user, content }) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content,
            });
            return id;
        },
    },
};

// const express = require("express");
// const app = express();

const server = new createServer({
    schema: {
        typeDefs,
        resolvers,
    },
});

// Set up options to avoid issues with cors
const options = {
    cors: {
        credentials: true,
        origin: ["http://localhost:8080"], // your frontend url.
    },
};

server.start(options, ({ port }) => {
    console.log(`Server on http://localhost:${port}/`);
});
