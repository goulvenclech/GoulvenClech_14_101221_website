import { useState } from "react"
import { useGlobalState } from "../../GlobalState"
import DepartementSelect from "../form/selectPresets/DepartementSelect"
import FieldSet from "../form/FieldSet"
import TextInput from "../form/TextInput"
import StateSelect from "../form/selectPresets/StateSelect"
import DateInput from "../form/DateInput"
import ZipCodeInput from "../form/ZipCodeInput"
import Modal from "../modal/Modal"
/**
 * Form to add a new employee in the global state.
 */
export default function NewEmployeeForm() {
  // store every input values
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ birthDate, setBirthDate ] = useState("")
  const [ startDate, setStartDate ] = useState("")
  const [ street, setStreet ] = useState("")
  const [ city, setCity ] = useState("")
  const [ state, setState ] = useState("")
  const [ zipCode, setZipCode ] = useState("")
  const [ dept, setDept ] = useState("")
  // modal boilerplate
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  // On submit, add a new employee to our globalState
  const { dispatch } = useGlobalState()
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    dispatch({type: "addEmployee", payload: {
      firstName: firstName, lastName: lastName, dateOfBirth: birthDate, startDate: startDate,
      street: street, city: city, zipCode: zipCode, state: state, departement: dept
    }})
    // display a modal with a sucess message
    setModalMessage("Employee " + firstName + " " + lastName + " created !")
    setModalVisibility(true)
    // typescript bs
    const target = event.target as HTMLFormElement
    // reset our form
    target.reset()
  }
  return(
    <section>
      <h2 className="text-center text-2xl font-bold my-6">
        Create Employee
      </h2>
      <Modal message={modalMessage} visibility={modalVisibility} setVisibility={setModalVisibility} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput name="First Name" setFunction={setFirstName} required />
        <TextInput name="Last Name" setFunction={setLastName} required />
        <DateInput name="Date of Birth" setFunction={setBirthDate} />
        <DateInput name="Start Date" setFunction={setStartDate} />
        <FieldSet name="Adress">
          <TextInput name="Street" setFunction={setStreet} />
          <TextInput name="City" setFunction={setCity} />
          <StateSelect setFunction={setState} />
          <ZipCodeInput name="Zip Code" setFunction={setZipCode} />
        </FieldSet>
        <DepartementSelect setFunction={setDept} />
        <button type="submit" value="Submit" 
          className="block w-14 mx-auto my-4 border-2 border-black">
          Save
        </button>
      </form>
    </section>

  )
}