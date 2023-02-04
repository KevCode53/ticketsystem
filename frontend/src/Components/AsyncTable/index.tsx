import { useEffect } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import styles from './styles.module.scss'

type Props = {
  data: any[],
  fetchData: (pageIndex: number) => Promise<any>,
  columns: any[],
  pageCount: number
}

const AsyncTable = ({
  data,
  fetchData,
  columns,
  pageCount: controlledPageCount
}: Props) => {

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount
    },
    useSortBy,
    usePagination,
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: {pageIndex},
  } = tableInstance


  useEffect(() => {
    fetchData(pageIndex)
  }, [fetchData, pageIndex])

  return (
    <div>
      {/* <div>
        <p>Total de registros: {preGlobalFilteredRows.length}</p>
        <input type="text"
          value={state.globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div> */}
      <table className={styles.table} {...getTableBodyProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ?"⬆️"
                      :"⬇️"
                    : ""
                  }
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default AsyncTable;