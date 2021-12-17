import {Test} from "@goulvenc/typescript-date-picker"
import NewEmployeeForm from "../components/landing/NewEmployeeForm"
import LandingHero from "../components/landing/LandingHero"
/**
 * Landing page of our HR Net application.
 */
export default function LandingPage() {
  return(
    <main className="w-80 mx-auto p-4">
      <LandingHero />
      <NewEmployeeForm />
      <Test text="Work in progress" />
    </main>
  )
}