import {
  LOGIN_START_EVENT,
  LOGIN_SUCCESS_EVENT,
  LOGIN_FAILURE_EVENT,
  LOGOUT_START_EVENT,
  LOGOUT_SUCCESS_EVENT,
  LOGOUT_FAILURE_EVENT
} from "../actions";

const initialState = {
  loginUser: undefined,
  isLoginProcessing: false,
  isLogoutProcessing: false,
}
const loginState = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload
  switch (type) {
    case LOGIN_START_EVENT:
      return { ...state, isLoginProcessing: true }
    case LOGIN_SUCCESS_EVENT:
      return { ...state, isLoginProcessing: false, loginUser: payload.user, error: undefined }
    case LOGIN_FAILURE_EVENT:
      return { ...state, isLoginProcessing: false, error: payload.error }
    case LOGOUT_START_EVENT:
      return { ...state, isLogoutProcessing: true }
    case LOGOUT_SUCCESS_EVENT:
      return { ...state, isLogoutProcessing: false, loginUser: undefined }
    case LOGOUT_FAILURE_EVENT:
      return { ...state, isLogoutProcessing: false, error: payload.error }
    default:
      return state
  }
}

export default loginState