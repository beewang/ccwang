import ApolloClient, { createNetworkInterface } from 'apollo-client'

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `${process.env.CCWANG_API}/graphql`,
  }),
})

export default {}
