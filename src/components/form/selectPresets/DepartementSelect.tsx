import { SetStateAction } from "react"
import SelectMenu from "../SelectMenu"
/**
 * Used to standardize the style and usage of the departement select menu in all our forms.
 */
export default function DepartementSelect({setFunction}: Props) {
  // List of all the departements existing in our compagny
  const departements: Array<string> = 
    ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]
  return(
    <SelectMenu name="Departement" options={departements} setFunction={setFunction} />
    )
}
interface Props {
  setFunction: React.Dispatch<SetStateAction<string>>
}