import styles from './styles.module.scss'
import { TicketType } from "@/models/type-whit-tickets";
import { useMemo } from "react";
import { Column, useTable, useGlobalFilter, useSortBy} from "react-table";

const index = ({data}) => {

  const columns = useMemo<Column<TicketType>[]>(
    () => [
      {
        Header: "Identifier",
        accessor: "id",
        // Cell:({value}) => <strong>{value}</strong>
      },
      {
        Header: "Created",
        accessor: "created",
        // Cell:({value}) => <strong>{value}</strong>
      },
      {
        Header: "Requesting by",
        accessor: "requesting_by",
        // Cell:({value}) => <strong>{value}</strong>
      },
      {
        Header: "Service",
        accessor: "service",
        // Cell:({value}) => <strong>{value}</strong>
      },
      {
        Header: "Descripcion",
        accessor: "description",
        // Cell:({value}) => <strong>{value}</strong>
      },
      {
        Header: "State",
        accessor: "state",
        // Cell:({value}) => <strong>{value}</strong>
      },
      {
        Header: "Actions", accessor: "actions", Cell:({value}) => <strong>{value}</strong>},
    ], []
  )

  const tableInstance = useTable(
      {columns, data: data},
      useGlobalFilter,
      useSortBy
    )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,

  } = tableInstance


  // return (
  //   // <div>
  //   // <table className={styles.table} {...getTableBodyProps()}>
  //   //   <thead>
  //   //     {headerGroups.map((headerGroup) => (
  //   //       <tr {...headerGroup.getHeaderGroupProps()}>
  //   //         {headerGroup.headers.map((column) => (
  //   //           <th {...column.getHeaderProps(column.getSortByToggleProps())}>
  //   //             {column.render("Header")}
  //   //             <span>
  //   //               {column.isSorted
  //   //                 ? column.isSortedDesc
  //   //                   ?"⬆️"
  //   //                   :"⬇️"
  //   //                 : ""
  //   //               }
  //   //             </span>
  //   //           </th>
  //   //         ))}
  //   //       </tr>
  //   //     ))}
  //   //   </thead>
  //   //   <tbody {...getTableBodyProps()}>
  //   //     {rows.map((row) => {
  //   //       prepareRow(row);
  //   //       return (
  //   //         <tr {...row.getRowProps()}>
  //   //           {row.cells.map((cell) => {
  //   //             return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
  //   //           })}
  //   //         </tr>
  //   //       )
  //   //     })}
  //   //   </tbody>
  //   // </table>
  //   // <div>
  //   //   <p>Total de registros: {preGlobalFilteredRows.length}</p>
  //   //   <input type="text"
  //   //     value={state.globalFilter}
  //   //     onChange={(e) => setGlobalFilter(e.target.value)}
  //   //   />
  //   // </div>
  //   // </div>
  // );
}

export default index;