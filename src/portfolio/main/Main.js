import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from './Header'
import Home from './Home'
import About from './About'

class Main extends React.Component {
  state = {
  }

  render() {
    return (
      <div>
        <Header />
        <div id="container">
          <Home />
          <About />
        </div>
      </div>
    )
  }
}

Main.propTypes = {}

const mapStateToProps = state => ({ posts: state.board.posts })

const mapDispatchToProps = dispatch => ({
  // loadPosts() {
  //   dispatch(load())
  // },
  // createPost(post) {
  //   dispatch(create(post))
  // },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
