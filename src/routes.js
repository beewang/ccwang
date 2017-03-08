/* eslint-disable global-require */
import React from 'react'
import { Route } from 'react-router'
import Portfolio from './modules/Portfolio/Portfolio'

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require)
  }
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={Portfolio} />
)
