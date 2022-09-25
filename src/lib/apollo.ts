import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8g5wgbc4blu01ul9jdzd2jt/master",
  cache: new InMemoryCache(),
})
