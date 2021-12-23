import { SetStateAction } from "react"
/**
 * Used to standardize the style and usage of input date in all our forms.
 */
export default function DateInput({name, setFunction}:Props) {
  return(
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{name}</label>
      <input type="date" id={name} name={name}  
        onChange={(event) => {setFunction(event.target.value)}} 
        className=" border-2 border-black p-1 text-sm">
      </input>
    </div>
  )
}
interface Props {
  name: string,
  setFunction: React.Dispatch<SetStateAction<string>>
}