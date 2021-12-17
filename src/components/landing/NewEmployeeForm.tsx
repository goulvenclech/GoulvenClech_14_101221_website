import DepartementSelect from "../form/selectPresets/DepartementSelect"
import FieldSet from "../form/FieldSet"
import TextInput from "../form/TextInput"
import StateSelect from "../form/selectPresets/StateSelect"
/**
 * Form to add a new employee in the DB.
 */
export default function NewEmployeeForm() {
  return(
    <section>
      <h2 className="text-center text-2xl font-bold my-6">
        Create Employee
      </h2>
      <form className="flex flex-col gap-4">
        <TextInput name="First Name" />
        <TextInput name="Last Name" />
        <TextInput name="Date of Birth" />
        <TextInput name="Start Date" />
        <FieldSet name="Adress">
          <TextInput name="Street" />
          <TextInput name="City" />
          <StateSelect />
          <TextInput name="Zip Code" />
        </FieldSet>
        <DepartementSelect />
        <button name="submit" className="block w-14 mx-auto my-4 border-2 border-black">
          Save
        </button>
      </form>
    </section>

  )
}