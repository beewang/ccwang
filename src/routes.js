import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StyleRoot } from 'radium'

import NavBar from 'components/NavBar'

const styles = {
  backgroundColor: '#f7f7f7',
  position: 'relative',
  minHeight: '100vh',
}


export default () => (
  <StyleRoot>
    <Router>
      <div style={styles}>
        <NavBar />
      </div>
    </Router>
  </StyleRoot>
)
