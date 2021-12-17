import {Link} from "react-router-dom"
import {Test} from "@goulvenc/typescript-date-picker"
import NewEmployeeForm from "../components/landing/NewEmployeeForm"
/**
 * Landing page of our HR Net application.
 */
export default function LandingPage() {
  return(
    <main className="w-80 mx-auto p-4">
      <h1 className="text-4xl text-center font-bold leading-loose">
        HRnet
      </h1>
      <div className="text-blue-700 text-center underline">
        <Link to="/">
          View Current Employees
        </Link>
      </div>
      <NewEmployeeForm />
      <Test text="Work in progress" />
    </main>
  )
}