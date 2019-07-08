import { take, call, put } from "redux-saga/effects"
import {
  LOGIN_START_EVENT,
  loginFailureEvent,
  loginSuccessEvent,
  LOGOUT_START_EVENT,
  logoutSuccessEvent,
  logoutFailureEvent,
} from "../actions";
import UserService from "../libs/services/userService";


function* handleLogin() {
  while (true) {
    const action = yield take(LOGIN_START_EVENT)
    const payload = action.payload
    const ret = yield call(UserService.loginAsync, payload.account, payload.password)
    console.warn(ret)
    const { user, error } = ret
    if (error) {
      yield put(loginFailureEvent(error))
    } else {
      yield put(loginSuccessEvent(user))
    }
  }
}

function* handleLogout() {
  while (true) {
    yield take(LOGOUT_START_EVENT)
    const { error } = yield call(UserService.logoutAsync)
    if (error) {
      yield put(logoutFailureEvent(error))
    } else {
      yield put(logoutSuccessEvent())
    }
  }
}

export default class UserSagas {
  static sagaFunctions = () => {
    return [
      handleLogin,
      handleLogout,
    ]
  }
}