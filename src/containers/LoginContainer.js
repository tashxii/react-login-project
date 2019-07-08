import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import LoginPage from "../components/pages/LoginPage"
import { loginStartEvent } from "../actions"

const mapStateToProps = (state) => ({
  loginState: state.loginState,
  errorState: state.errorState,
})

const mapDispatchToProps = (dispatch) => ({
  onLoginButtonClick: (account, password) => {
    dispatch(loginStartEvent(account, password))
  }
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default withRouter(LoginContainer)