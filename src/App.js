import React from 'react'
import { Provider } from 'react-redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Helmet from 'react-helmet'

// Import Routes
import Routes from './routes'

// Base stylesheet
import './app.css'

// Setup Apollo client
const createClient = () => (
  new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: `${process.env.CCWANG_API}/graphql`,
    }),
  })
)

console.log('process.env.CCWANG_API', process.env.CCWANG_API)

function App(props) {
  return (
    <ApolloProvider client={createClient()}>
      <Provider store={props.store}>
        <div>
          <Helmet
            titleTemplate="%s | MySurrey"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />

          <Routes />
        </div>
      </Provider>
    </ApolloProvider>
  )
}

App.propTypes = {
  store: React.PropTypes.object.isRequired, // eslint-disable-line
}

export default App
