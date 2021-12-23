import { SetStateAction } from "react"
/**
 * Used to standardize the style and usage of select menus in all our forms.
 */
export default function SelectMenu({name, options, setFunction}: Props) {
  return(
    <div className="flex flex-col gap-1">
    <label htmlFor={name}>{name}</label>
    <select id={name} name={name}
      onChange={(event) => {setFunction(event.target.value)}} 
      className="border-2 border-black py-1 text-sm">
      {
        options.map((option, index) => { 
        return <option value={option} key={index}>{option}</option>
        })
      }
    </select>
    </div>
  )
}
interface Props {
  name: string,
  options: Array<string>,
  setFunction: React.Dispatch<SetStateAction<string>>
}