import React from 'react'
import Radium from 'radium'
import { Route } from 'react-router-dom'

// import NavBar from '../components/NavBar'
import Board from './board'
import Main from './main'
import Header from './Header'

const styles = {
  root: { },
}
// <NavBar />
class Portfolio extends React.Component {
  state = {}

  render() {
    return (
      <div style={styles.root}>
        <Route exact path="/" render={() => <Main {...this.props} />} />
        <Route path="/board" render={() => <Board {...this.props} />} />
      </div>
    )
  }
}
// <Header />

export default Radium(Portfolio)
