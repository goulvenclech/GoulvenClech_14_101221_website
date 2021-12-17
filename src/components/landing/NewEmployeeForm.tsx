import DepartementSelect from "../form/DepartementSelect"
import TextInput from "../form/TextInput"
/**
 * Form to add a new employee in the DB.
 */
export default function NewEmployeeForm() {
  return(
    <section>
      <h2 className="text-center text-2xl font-bold my-6">
        Create Employee
      </h2>
      <form>
        <TextInput name="First Name" />
        <TextInput name="Last Name" />
        <TextInput name="Date of Birth" />
        <TextInput name="Start Date" />
        <DepartementSelect />
        <button name="submit" className="block w-14 mx-auto my-4 border-2 border-black">
          Save
        </button>
      </form>
    </section>

  )
}