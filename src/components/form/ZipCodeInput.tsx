import { SetStateAction } from "react"
/**
 * Used to standardize the style and usage of Zip Code input in all our forms.
 */
export default function ZipCodeInput({name, setFunction}:Props) {
  return(
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{name}</label>
      <input id={name} name={name} type="number" inputMode="numeric"
        onChange={(event) => {setFunction(event.target.value)}} 
        className=" border-2 border-black p-1 text-sm" >
      </input>
    </div>
  )
}
interface Props {
  name: string,
  setFunction: React.Dispatch<SetStateAction<string>>
}