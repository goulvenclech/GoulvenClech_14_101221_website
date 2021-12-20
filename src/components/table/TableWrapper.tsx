import { useEffect, useState } from "react"
import Table from "./Table"
/**
 * Wrap together our table and some useful tools like research or filters
 */
export default function TableWrapper({id, cols, items}: Props) {
  // store all useful information
  const [query, setQuery] = useState("")
  const [maxEntries, setMaxEntries] = useState(0)
  const [results, setResults] = useState(items)
  // Filter and slice results
  useEffect(() => {
    const filteredItems = items.filter(properties => 
      properties.some(property => property.includes(query)))
    const slicedItems = filteredItems.slice(0, maxEntries)
    setResults(slicedItems)
  }, [query, maxEntries])
  return(
    <section>
      <h2 className="sr-only">
        {id}
      </h2>
      <div className="flex my-6">
        <div>
          Show
          <select className="border border-black mx-2 py-1 text-sm" value={10}
            onChange={(event) => {setMaxEntries(parseInt(event.target.value))}} >
            <option value={10} selected>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          entries
        </div>
        <div className="ml-auto">
          Search: 
          <input type="text" name="tableResearchInput" 
            onChange={(event) => {setQuery(event.target.value)}} 
            className="border border-black ml-1 px-1 text-sm" >
          </input>
        </div>
      </div>
      <Table cols={cols} items={results} />
      <div className="flex my-6">
        <p>
          Showing 0 to {items.length > maxEntries ? maxEntries : items.length  } of 
          {" " + items.length} entries
        </p>
        <p className="ml-auto">
          Page 1 
        </p>
      </div>
    </section>
  )
}
interface Props {
  id: string,
  cols: Array<string>,
  items: Array<Array<string>>
}