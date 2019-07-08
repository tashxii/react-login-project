import React, { Component } from "react"

import Button from "../basics/Button"
import ErrorCard from "../basics/ErrorCard"

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = { account: "", password: "" }
    this.handleAccountChange = this.handleAccountChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  render() {
    const label = (this.props.loginState.isLoginProcessing) ? "Login..." : "Login"
    const disabled = this.props.loginState.isLoginProcessing || this.state.account === ""
    return (
      <div>
        <div>
          <div>Account</div>
          <input type="text" style={{ height: "30px", width: "120px" }} autoFocus={true} onChange={this.handleAccountChange} />
        </div>
        <div>
          <div>Password</div>
          <input type="password" style={{ height: "30px", width: "120px" }} onChange={this.handlePasswordChange} />
        </div>
        {this.props.loginState.error ? <ErrorCard errorMessage={this.props.loginState.error} /> : null}
        <Button onClick={() => this.props.onLoginButtonClick(this.state.account, this.state.password)} disabled={disabled} >{label}</Button>
      </div>
    )
  }

  handleAccountChange(e) {
    this.setState({ account: e.target.value })
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

}

export default LoginForm
