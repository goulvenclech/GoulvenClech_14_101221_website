import * as ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "tailwindcss/tailwind.css"
import EmployeesPage from "./pages/Employees"
import LandingPage from "./pages/Landing"
/**
 * Router logic of our app.
 */
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="employees" element={<EmployeesPage />} />
    </Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
