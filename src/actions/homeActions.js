export const LOGOUT_START_EVENT = "LOGOUT_START_EVENT"
export const LOGOUT_SUCCESS_EVENT = "LOGOUT_SUCCESS_EVENT"
export const LOGOUT_FAILURE_EVENT = "LOGOUT_FAILURE_EVENT"

export const logoutStartEvent = () => ({
  type: LOGOUT_START_EVENT,
  payload: {
  }
})

export const logoutSuccessEvent = () => ({
  type: LOGOUT_SUCCESS_EVENT,
  payload: {
  }
})

export const logoutFailureEvent = (error) => ({
  type: LOGOUT_FAILURE_EVENT,
  payload: {
    error,
  }
})
