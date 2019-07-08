import ErrorMessage from "../../models/errorMessage";

const httpStatusCodes = {
  // 2XX
  "200": "200(OK)",
  "201": "201(Created)",
  "202": "202(Accepted)",
  "203": "203(Non-Authoritative Information)",
  "204": "204(No Content)",
  "205": "205(Reset Content)",
  "206": "206(Partial Content)",
  // 4XX
  "400": "400(Bad Request)",
  "401": "401(Unathorized)",
  "402": "402(Payment Required)",
  "403": "403(Forbidden)",
  "404": "404(Not Found)",
  "405": "405(Method Not Allowed)",
  "406": "406(Not Acceptable)",
  "408": "408(Request Timeout)",
  "409": "409(Conflict)",
  "415": "415(Unsupported Media Type)",
  // 5XX
  "500": "500(Internal Server Error)",
  "501": "501(Not Implemented)",
  "502": "502(Bad Gateway)",
  "503": "503(Service Unavailable)",
}

export default class ApiErrorConverter {
  static createByApiError(apiError, summary) {
    const code = httpStatusCodes[apiError.httpStatus] | apiError.httpStatus
    return new ErrorMessage(code, summary, apiError.message)
  }
}