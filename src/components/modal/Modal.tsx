import { SetStateAction } from "react"
/**
 * Display a message
 */
export default function Modal({message, visibility, setVisibility}:Props) {
  return(
    <div className={!visibility ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-slate-900/50"}>
      <div className="block relative bg-white mx-auto my-64 w-80 p-4 rounded shadow ">
        <button className="absolute rounded-full -top-4 -right-4
        bg-slate-900 text-white text-sm font-black py-1 px-2"
          onClick={() => (setVisibility(false))}>
          X
        </button>
        {message}
      </div>
    </div>
  )
}
interface Props {
  message: string,
  visibility: boolean
  setVisibility: React.Dispatch<SetStateAction<boolean>>
}