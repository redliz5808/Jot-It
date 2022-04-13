import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
    // Change uri to point to the url of our graphQL server
    uri: "http://localhost:4000",
    fetchOptions: {
        mode: "no-cors",
    },
    cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
    query {
        messages {
            id
            content
            user
        }
    }
`;

const Messages = ({ user }) => {
    const { data } = useQuery(GET_MESSAGES);
    if (!data) {
        console.log("no data");
        return null;
    }
    console.log(JSON.stringify(data));
    return JSON.stringify(data);
};

const Chat = () => {
    return (
        <div>
            <Messages user="Jack" />
        </div>
    );
};

export default () => {
    return (
        <ApolloProvider client={client}>
            <Chat />
        </ApolloProvider>
    );
};
