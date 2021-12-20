import { useGlobalState } from "../../../GlobalState"
import Table from "../Table"
/**
 * 
 */
export default function EmployeesTable() {
  //
  const cols: Array<string> = 
    ["First Name", "Last Name", "Start Date", "Department", "Date of Birth",
    "Street", "City", "State", "Zip Code"]
  //
  const { state } = useGlobalState()
  console.log(state)
  const items:Array<Array<string>> = state.map(employee => { 
    if(employee !== undefined) {
      return Object.values(employee)
    }else return []
  })
  return(
    <Table cols={cols} items={items} />
  )
}