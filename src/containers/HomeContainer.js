import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import HomePage from "../components/pages/HomePage"
import { logoutStartEvent } from "../actions"

const mapStateToProps = (state) => ({
  loginState: state.loginState
})

const mapDispatchToProps = (dispatch) => ({
  onLogoutLinkClick: () => {
    dispatch(logoutStartEvent())
  }
})

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default withRouter(HomeContainer)