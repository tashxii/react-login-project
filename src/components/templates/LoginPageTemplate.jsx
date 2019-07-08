import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import LoginForm from "../parts/LoginForm"
import styled from 'styled-components'

class LoginPageTemplate extends Component {
  render() {
    if (this.props.loginState.loginUser) {
      return <Redirect to="/home" />
    }
    return (
      <Div parent>
        <Div center>
          <LoginForm {...this.props} />
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

export default LoginPageTemplate
