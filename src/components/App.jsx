import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import LoginContainer from "../containers/LoginContainer"
import HomeContainer from "../containers/HomeContainer"

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/index.html" component={LoginContainer} />
      <Route path="/home" component={HomeContainer} />
    </div>
  </BrowserRouter>
)
export default App