import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import LandingPage from "./pages/Landing"

ReactDOM.render(
  <BrowserRouter>
    <LandingPage />
  </BrowserRouter>,
  document.getElementById("root")
)
