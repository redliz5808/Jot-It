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

// Set up the server
const server = new createServer({
    schema: {
        typeDefs,
        resolvers,
    },
});
server.start(({ port }) => {
    console.log(`Server on http://localhost:${port}/`);
});
