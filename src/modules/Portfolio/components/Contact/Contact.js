import React, { Component, PropTypes } from 'react'

export class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render(props, ctrl, children) {
    return (
      <section id="contact">
        <div
          className="background background_3"
          data-center="background-position: 50% 0px;"
          data-top-bottom="background-position: 50% -200px;"
          data-anchor-target="#contact"
        >
          <div className="container">
            <div
              className="content"
              data-center-top="opacity: 1; left:0vw;"
              data-bottom="opacity: 0; left: 10vw;"
              data-anchor-target="#contact .title"
            >
              <span className="title">聯絡我</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Contact
