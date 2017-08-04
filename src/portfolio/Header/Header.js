import React, { Component } from 'react'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  render() {
    return (
      <header
        data-0="background-color: rgba(252,250,249,0);"
        data-150="background-color: rgba(252,250,249,0.7);"
      >
        <ul
          id="nav"
          data-0="padding:10px 0;"
          data-150="padding: 0 0;"
        >
          <li><a href="#home" data-anchor-target="#home" data-bottom-top="@class:inactive" data-50-top="@class:active" data-50-top-bottom="@class:inactive">首頁</a></li>
          <li><a href="#project" data-anchor-target="#project" data-bottom-top="@class:inactive" data-50-top="@class:active" data-50-top-bottom="@class:inactive">關於</a></li>
        </ul>
      </header>
    )
  }
}

export default Header
