import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
    // Change uri to point to the url of our graphQL server
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

// Chat contains everything that we want to show in the chat window
const Chat = () => {
    return <div>I'm a chat window!</div>;
};

// Exports the chat information to App.js
export default () => {
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>;
};
