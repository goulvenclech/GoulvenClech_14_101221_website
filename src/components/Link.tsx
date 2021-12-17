import { Link } from "react-router-dom"
/**
 * Intern link used to navigate in our app
 */
export default function InternLink({name, to}:Props) {
  return(
    <div className="text-blue-700 text-center underline">
      <Link to={to}>
        {name}
      </Link>
    </div>
  )
}
interface Props {
  name: string,
  to: string
}