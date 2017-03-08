import React, { Component, PropTypes } from 'react'

export class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render(props, ctrl, children) {
    return (
      <section id="project">
        <div
          className="background background_2"
          data-center="background-position: 50% 0px;"
          data-top-bottom="background-position: 50% -200px;"
          data-anchor-target="#project"
        >
          <div className="container">
            <div
              className="content"
              data-center-top="opacity: 1; left:0vw;"
              data-bottom="opacity: 0; left: 10vw;"
              data-anchor-target="#project .title"
            >
              <span className="title">作品</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Project
