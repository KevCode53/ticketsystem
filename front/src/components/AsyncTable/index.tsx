import { Table, TableBody, TableContainer, TableHead, Paper, TableRow, TableCell, Pagination, PaginationItem, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect } from "react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import { useAsync } from "../../hooks/useAsync";
import { TableProps } from "../../models/async-table.model";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SearchIcon from '@mui/icons-material/Search';

import styles from './styles.module.scss'

const index = ({
  data,
  fetchData,
  columns,
  pageCount: controlledPageCount
}: TableProps) => {

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount
    },
    useGlobalFilter,
    usePagination,
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageCount,
    pageOptions,
    nextPage,
    gotoPage,
    page,
    previousPage,
    state: {pageIndex},
    setGlobalFilter,
    state
  } = tableInstance

  useEffect(()=>{
    fetchData(pageIndex)
  },[fetchData, pageIndex])

  const paginationOnChange = (e:any, value:any) => {
    console.log(pageIndex)
    gotoPage(value - 1)
  }


  return (
    <>
      <div className={styles.search}>
        <div className={styles.form_group}>
          <input
            type="text"
            required
            value={state.globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <label htmlFor="">
            <SearchIcon />
            <span>
              Search
            </span>
          </label>
        </div>
      </div>
      <table className={styles.table}>
        <thead {...getTableProps()}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          { rows.length < 1
            ? (<tr>
                <td colSpan={columns.length}>No records found in the query</td>
            </tr>)
            :rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
            )
          })}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <div className="">
        <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        </div>
        <div className={styles.buttons_pages}>
          <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>
            <KeyboardDoubleArrowLeftIcon />
          </button>
          <button onClick={()=> previousPage()} disabled={!canPreviousPage}>
            <KeyboardArrowLeftIcon/>
          </button>
          <button onClick={()=> nextPage()} disabled={!canNextPage}>
            <KeyboardArrowRightIcon/>
          </button>
          <button onClick={()=> gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <KeyboardDoubleArrowRightIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default index;