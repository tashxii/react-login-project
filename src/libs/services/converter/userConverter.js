import User from "../../models/user"

export default class UserConverter {
  static convertUserByLoginResponse = (response) => {
    return new User(response.account, response.name)
  }
  static convertLoginRequest = (account, password) => {
    return { account: account, password: password }
  }
}