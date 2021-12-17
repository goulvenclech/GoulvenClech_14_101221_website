/**
 * Used to standardize the style and usage of the departement select menu in all our forms.
 */
export default function DepartementSelect() {
  // List of all the departements existing in our compagny
  const departements: Array<string> = 
    ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]
  return(
    <div className="flex flex-col gap-1 my-4">
      <label>Departement</label>
      <select id="Departement" name="Departement"
        className=" border-2 border-black p-1 text-sm">
          { // Create an option for every departement
            departements.map((dept, index) => { 
              return <option value={dept} key={index}>{dept}</option>
            })
          }
      </select>
    </div>
  )
}
