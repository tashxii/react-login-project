import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import HomeView from "../parts/HomeView"
import styled from 'styled-components'

class HomePageTemplate extends Component {
  render() {
    if (!this.props.loginState.loginUser) {
      return <Redirect to="/" />
    }
    return (
      <Div parent>
        <Div center>
          <HomeView {...this.props} />
        </Div>
      </Div>
    )
  }
}

const Div = styled.div`
  ${props => (props.parent ? parent : (props.center ? center : ""))}"
`
const parent = { height: "90vh", width: "90vw", position: "relative" }
const center = { textAlign: "center", top: "50%", left: "50%", transform: "translate(-50%,-50%)", position: "absolute" }


export default HomePageTemplate
