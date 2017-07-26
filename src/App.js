import React from 'react'
import { Provider } from 'react-redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Import Routes
import Routes from './routes'
import { configureStore } from './store'

// Base stylesheet
import './app.css'

// setup redux store
const store = configureStore()

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `${process.env.CCWANG_API}/graphql`,
  }),
})

function App() {
  return (
    <MuiThemeProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <div>
            <Helmet
              titleTemplate="%s | CCWang"
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
    </MuiThemeProvider>
  )
}

export default App
