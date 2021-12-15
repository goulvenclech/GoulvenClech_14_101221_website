import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "tailwindcss/tailwind.css"
import LandingPage from "./pages/Landing"
/**
 * Router logic of our app.
 */
ReactDOM.render(
  <BrowserRouter>
    <LandingPage />
  </BrowserRouter>,
  document.getElementById("root")
)
