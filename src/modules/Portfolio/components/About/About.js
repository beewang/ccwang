import React, { Component, PropTypes } from 'react'

export class About extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render(props, ctrl, children) {
    return (
      <section id="about">
        <div
          className="background background_4"
          data-center="background-position: 50% 0px;"
          data-top-bottom="background-position: 50% -200px;"
          data-anchor-target="#about"
        >
          <div className="container">
            <div
              className="content"
              data-center-top="opacity: 1; left:0vw;"
              data-bottom="opacity: 0; left: 10vw;"
              data-anchor-target="#about .title"
            >
              <span className="title">關於</span>
              <div className="card">
                是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default About
