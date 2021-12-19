/**
 * Used to standardize the style and usage of Zip Code input in all our forms.
 */
export default function ZipCodeInput({name}:Props) {
  return(
    <div className="flex flex-col gap-1">
      <label>{name}</label>
      <input id={name} name={name} type="number" inputMode="numeric" 
        pattern="[0-9]*"
        className=" border-2 border-black p-1 text-sm" >
      </input>
    </div>
  )
}
interface Props {
  name: string,
}