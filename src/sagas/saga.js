import { fork } from "redux-saga/effects"
import UserSagas from "./userSagas"

export default function* rootSaga() {
  let sagaFunctions = []
  sagaFunctions = sagaFunctions.concat(UserSagas.sagaFunctions())

  for (let i = 0; i < sagaFunctions.length; i++) {
    yield fork(sagaFunctions[i])
  }
}