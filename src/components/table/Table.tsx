/**
 * 
 */
export default function Table({cols, items}:Props) {
  return(
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          { // The list of string "cols" is every table columns we need to create   
            cols.map((col, index) => {
              return <th key={index}>{col}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, index) => { // create a row for each item
            return <tr className={"leading-loose border-y border-black " + 
              (index%2==0 ? "bg-slate-100" : "") } key={index}>
              { // create a table data for each columns, with every value of the item
                item.map((value, index) => {
                  return <td key={index}>{value}</td>
                })
              }
            </tr>
          })
        }
      </tbody>
    </table>
  )
}
interface Props {
  cols: Array<string>,
  items: Array<Array<string>>
}
