import React, { Component } from 'react'
import '../../portfolio.css'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render() {
    return (
      <section id="home">
        <div
          className="background picture-home"
          data-center="background-position: 50% 0px;"
          data-top-bottom="background-position: 50% -200px;"
          data-anchor-target="#home"
        />
      </section>
    )
  }
}


export default Home
