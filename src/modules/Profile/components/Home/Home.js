import React, { Component, PropTypes } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render(props, ctrl, children) {
    return (
      <section id="home">
        <div
          className="background background_1"
          data-center="background-position: 50% 0px;"
          data-top-bottom="background-position: 50% -200px;"
          data-anchor-target="#home"
        >
          <div className="container">
            <div
              className="content"
              data-center-top="opacity: 1;"
              data-bottom="opacity: 0;"
              data-anchor-target="#home h2"
            >
              <h2>HELLO :) </h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Home
