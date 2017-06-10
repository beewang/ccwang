import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StyleRoot } from 'radium'

import Portfolio from './portfolio'

export default () => (
  <StyleRoot>
    <Router>
      <Portfolio />
    </Router>
  </StyleRoot>
)
