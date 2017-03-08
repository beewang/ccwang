/**
 * Client entry point
 */
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { configureStore } from './store'

const store = configureStore()
const mountApp = document.getElementById('root')

render(
  <App store={store} />,
  mountApp
)
