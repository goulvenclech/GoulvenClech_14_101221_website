import * as ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "tailwindcss/tailwind.css"
import { GlobalStateProvider } from "./GlobalState"
import EmployeesPage from "./pages/Employees"
import LandingPage from "./pages/Landing"
/**
 * Router logic of our app.
 */
ReactDOM.render(
  <BrowserRouter>
    <GlobalStateProvider>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="employees" element={<EmployeesPage />} />
        </Route>
      </Routes>
    </GlobalStateProvider>
  </BrowserRouter>,
  document.getElementById("root")
)
