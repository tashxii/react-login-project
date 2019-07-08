import UserApi from "../apis/userApi";
import UserConverter from "./converter/userConverter";
import ApiErrorConverter from "./converter/apiErrorConverter";

export default class UserService {
  static loginAsync = async (account, password) => {
    const request = UserConverter.convertLoginRequest(account, password)
    return await UserApi.login(request)
      .then((response) => {
        return { user: UserConverter.convertUserByLoginResponse(response) }
      })
      .catch((httpError) => {
        return {
          error: ApiErrorConverter.createByApiError(httpError, "Account or password is invalid")
        }
      })
  }
  static logoutAsync = async () => {
    return await UserApi.logout()
      .then((/*response*/) => {
        return {}
      })
      .catch((httpError) => {
        return {
          error: ApiErrorConverter.createByApiError(httpError, "Logout is failed")
        }
      })
  }
}