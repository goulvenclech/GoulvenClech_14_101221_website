import { useEffect, useState } from "react"
import SelectMaxEntries from "./selectMaxEntries"
import Table from "./Table"
import TableSearch from "./TableSearch"
/**
 * Wrap together our table and some useful tools like research or filters
 */
export default function TableWrapper({id, cols, items}: Props) {
  // store all useful information
  const [query, setQuery] = useState("")
  const [maxEntries, setMaxEntries] = useState(10)
  const [results, setResults] = useState(items.slice(0,10))
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
        <SelectMaxEntries setFunction={setMaxEntries}/>
        <TableSearch setFunction={setQuery} />
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