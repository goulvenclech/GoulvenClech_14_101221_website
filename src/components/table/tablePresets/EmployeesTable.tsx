import Table from "../Table"
/**
 * 
 */
export default function EmployeesTable() {
  const cols: Array<string> = 
    ["First Name", "Last Name", "Start Date", "Department", "Date of Birth",
    "Street", "City", "State", "Zip Code"]
  const items: Array<Array<string>> = 
    [
      ["Goulven", "CLEC'H", "01/01/2010", "Sales", "15/11/1997",
      "Rue de l'informatique", "Toulouse", "France", "31200"],
      ["Jean", "Jacques", "05/09/2015", "Sales", "10/10/1987",
      "Rue de l'avenue", "Gaillac", "France", "31600"],
    ]
  return(
    <Table cols={cols} items={items} />
  )
}