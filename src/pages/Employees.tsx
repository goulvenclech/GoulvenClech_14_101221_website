import InternLink from "../components/Link"
import EmployeesHero from "../components/employees/EmployeesHero"
import EmployeesTable from "../components/table/presets/EmployeesTable"
/**
 * A page displaying all employees in a table.
 */
export default function EmployeesPage() {
  return(
    <main className="max-w-screen-lg mx-auto p-4 flex flex-col gap-4">
      <EmployeesHero />
      <EmployeesTable />
      <InternLink to="/" name="Home" />
    </main>
  )
}