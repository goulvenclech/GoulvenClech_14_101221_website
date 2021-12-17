/**
 * Fieldset
 */
export default function FieldSet(Props: Props) {
  return(
    <fieldset className="flex flex-col gap-2 border-2 border-black p-3">
      <legend>
        {Props.name}
      </legend>
      {Props.children}
    </fieldset>
  )
}
interface Props {
  name: string,
  children: React.ReactNode
}
  