export default class UserApi {
  static login = (request) => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if (request.account === request.password) {
            const response = { httpStatus: 200, account: request.account, name: `${request.account}-san` }
            resolve(response)
          } else {
            const err = { httpStatus: 401, message: "account and password must be same" }
            reject(err)
          }
        }, 334) // wait a litle while
    })
  }

  static logout = () => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          resolve({})
        }, 334) // wait a litle while
    })
  }

}