export const LOGIN_START_EVENT = "LOGIN_START_EVENT"
export const LOGIN_SUCCESS_EVENT = "LOGIN_SUCCESS_EVENT"
export const LOGIN_FAILURE_EVENT = "LOGIN_FAILURE_EVENT"

export const loginStartEvent = (account, password) => ({
  type: LOGIN_START_EVENT,
  payload: {
    account,
    password,
  }
})

export const loginSuccessEvent = (user) => ({
  type: LOGIN_SUCCESS_EVENT,
  payload: {
    user,
  }
})

export const loginFailureEvent = (error) => ({
  type: LOGIN_FAILURE_EVENT,
  payload: {
    error,
  }
})
