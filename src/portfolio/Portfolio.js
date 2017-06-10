import React from 'react'
import Radium from 'radium'
import { Route } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Board from './board'

const styles = {
  root: {
    backgroundColor: '#f7f7f7',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
}

class Portfolio extends React.Component {
  state = {}

  render() {
    return (
      <div style={styles.root}>
        <NavBar />
        <Route
          path="/board"
          render={() => <Board {...this.props} />}
        />
      </div>
    )
  }
}

export default Radium(Portfolio)
