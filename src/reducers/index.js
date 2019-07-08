import { combineReducers } from "redux"
import loginState from "./loginState"
import errorState from "./errorState"

const appState = combineReducers({
  loginState,
  errorState,
})
export default appState