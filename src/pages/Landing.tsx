import { Link } from "react-router-dom"
import {Test} from "@goulvenc/typescript-date-picker"
/**
 * Landing page of our HR Net application.
 */
export default function LandingPage() {
  return(
    <main className="">
      <h1>
        HRnet
      </h1>
      <Link to="/">
        View Current Employees
      </Link>
      <h2>
        Create Employee
      </h2>
      <Test text="Work in progress" />
    </main>
  )
}