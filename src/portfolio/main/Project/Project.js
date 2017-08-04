import React, { Component } from 'react'

export class Project extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render() {
    return (
      <section id="project">
        <div
          className="background picture-candle"
          data-center="background-position: 50% 0px;"
          data-top-bottom="background-position: 50% -200px;"
          data-anchor-target="#about"
        >
          <div className="container">
            <div
              data-top="opacity: 1;"
              data-100-center="opacity: 0;"
            >
              <div className="title">關於</div>
            </div>
            <div
              className="content"
              data-top="opacity: 1;"
              data-100-top="opacity: 0;"
              data-anchor-target="#about .title"
            >
              <div className="cards">
                <div className="cards-left">
                  <div className="card">
                    是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
                  </div>
                  <div className="card">
                    是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
                  </div>
                  <div className="card">
                    是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
                  </div>
                  <div className="card">
                    是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
                  </div>
                </div>
                <div className="cards-right">
                  <div className="card">
                    是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
                  </div>
                  <div className="card">
                    是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
                  </div>
                  <div className="card">
                    是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
                  </div>
                  <div className="card">
                    是我們的設計理念；在地球環保危機的今天，「綠色建築」不再只是口號，不再是敷衍，她是我們的創意的來源；在陽光、在空氣、水與大地間，人需與環境共生，建築需與環境共舞。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Project
