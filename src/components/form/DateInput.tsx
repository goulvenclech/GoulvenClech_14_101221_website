/**
 * Used to standardize the style and usage of input date in all our forms.
 */
export default function DateInput({name}:Props) {
  return(
    <div className="flex flex-col gap-1">
      <label>{name}</label>
      <input type="date" id={name} name={name}  
        className=" border-2 border-black p-1 text-sm">
      </input>
    </div>
  )
}
interface Props {
  name: string,
}