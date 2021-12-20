import React, { createContext, useContext, Dispatch, useReducer } from "react"
import { Employee } from "./types"
/**
 * We use a React context as a global state, filled with placefolder value.
 * Note that our global state will just be an array of employees for now.
 * But in the future, we can imagine a complex store, where `store.employees`
 * is juste one of the data stored :)
 */
const GlobalStateContext = createContext({
  state: [] as Partial<Array<Employee>>,
  dispatch: {} as Dispatch<Action>,
})
/**
 * A reducer with differents actions to change the global state
 */
function reducer(employees: Array<Employee>, action: Action) {
  switch (action.type) {
    case "addEmployee":
      employees.push(action.payload)
      return employees
    default : 
      throw new Error()
  }
}
/**
 * Safe typing every reducer's actions (but for now, there is only one LOL)
 */
type Action = 
  | { type: "addEmployee", payload: Employee}
/**
 * Creating a GlobalStateContext.Provider (used in App.tsx) allowing us to touch de global state
 * everywhere in our App. This global state will carry state & dispatch from our reducer.
 */
export const GlobalStateProvider = ({ children, value = [] }: Props) => {
  const [state, dispatch] = useReducer(reducer, value)
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
interface Props {  
  children: React.ReactNode,
  value?: Array<Employee>
}
/**
 * Allow us to use useGlobalState() instead of useContext(GlobalStateContext) for clarity 
 */
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext)
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateContext")
  }
  return context
}
/**
 * And that's it ! Why do people even use Redux for? 🤔
 */