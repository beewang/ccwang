import React, { Component, PropTypes } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

export class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render() {
    return (
      <div>
        <Header />
        <div id="container">
          <Home />
          <About />
          <Project />
          <Contact />
        </div>
      </div>
    )
  }
}

export default Portfolio
