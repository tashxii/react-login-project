import React, { Component } from "react"
import Link from "../basics/Link"

class HomeView extends Component {
  render() {
    const disabled = this.props.loginState.isLogoutProcessing
    const text = this.props.loginState.isLogoutProcessing ? "Logout..." : "Logout"
    return (
      <div>
        Home
        <Link onClick={this.props.onLogoutLinkClick} text={text} disabled={disabled} />
      </div>
    )
  }
}

export default HomeView
