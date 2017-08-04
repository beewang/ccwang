import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Home from './Home'
import Project from './Project'
import NavBar from '../../components/NavBar'

class Main extends React.Component {
  state = {
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="container">
          <Home />
          <Project />
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
