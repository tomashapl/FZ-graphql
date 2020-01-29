import { ApolloServer } from "apollo-server-express"
import express from "express"
import typeDefs from './schema'
import * as resolvers from './resolvers'
import cors from "cors"

const apolloServerConfig = {
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === "development",
};

// GRAPHQL Server
const server = new ApolloServer(apolloServerConfig);
const graphqlServer = express();

graphqlServer.use(cors());

server.applyMiddleware({ app: graphqlServer, path: '/' });

graphqlServer.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
