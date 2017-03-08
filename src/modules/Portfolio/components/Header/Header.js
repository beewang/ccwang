import React, { Component, PropTypes } from 'react'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render(props, ctrl, children) {
    return (
      <header
        data-0="background-color: rgba(255,255,255,0.25);"
        data-150="background-color: rgba(252, 252, 252, 0);"
      >
        <ul
          id="nav"
          data-0="padding:20px 0;"
          data-150="padding: 0 0;"
        >
          <li><a href="#home">首頁</a></li>
          <li><a href="#about">關於</a></li>
          <li><a href="#project">作品</a></li>
          <li><a href="#contact">聯絡我</a></li>
        </ul>
      </header>
    )
  }
}


export default Header
