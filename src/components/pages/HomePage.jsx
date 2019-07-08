import React, { Component } from "react"
import HomePageTemplate from "../templates/HomePageTemplate"

class HomePage extends Component {
  render() {
    return (
      <HomePageTemplate {...this.props} />
    )
  }
}

export default HomePage
