import '@babel/polyfill';
import { GraphQLServer } from 'graphql-yoga';
import resolvers from "./src/resolvers";
import typeDefs from "./src/typeDefs";

const server = new GraphQLServer({
  typeDefs,
  resolvers
});
const options = {
  port: 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
//server.start(() => console.log('Server is running on localhost:4000'))