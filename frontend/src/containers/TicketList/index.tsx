import LoadingSpinner from "@/Components/LoadingSpiner";
import { useAsync } from "@/hooks/useAsync";
import { useFetchAndLoad } from "@/hooks/useFetchAndLoad";
import { TicketType } from "@/models/type-whit-tickets";
import { getTickets } from "@/services/private.tickets.service";
import { useCallback, useEffect, useMemo, useState } from "react";
import TableTickets from '@/containers/TableTickets'
import AsyncTable from "@/Components/AsyncTable";
import { fetchUsers, getUsers } from "@/services/public.users_test.service";

const TicketList = () => {
  const [tickets, setTickets] = useState(Array<TicketType>)
  const {loading, callEndpoint} = useFetchAndLoad()
  const getApiData = async () => await callEndpoint(getTickets())

  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [pageCount, setPageCount] = useState(0)

  const adaptTickets = (data:any) => {
    setTickets(data)
  }

  const fetchData = useCallback(async (page:number) => {
    setIsLoading(true)
    const data = await getUsers(page + 1)
    setUsers(data.data)
    console.log(data)
    setPageCount(data.total_pages)
    setIsLoading(false)
  }, [])


  const columns = [
    {
      Header: "Identifier",
      accessor: "id",
      // Cell:({value}) => <strong>{value}</strong>
    },
    {
      Header: "Avatar",
      accessor: "avatar",
      // Cell:({value}) => <strong>{value}</strong>
    },
    {
      Header: "First Name",
      accessor: "first_name",
      // Cell:({value}) => <strong>{value}</strong>
    },
    {
      Header: "Last Name",
      accessor: "last_name",
      // Cell:({value}) => <strong>{value}</strong>
    },
    {
      Header: "Email",
      accessor: "email",
      // Cell:({value}) => <strong>{value}</strong>
    },
  ]

  // const getUsersData = async () => {
  //   try {
  //     const data = await callEndpoint(fetchUsers(1))
  //     console.log(data.data)
  //     setUsers(data.data.data)
  //   } catch (error) {}
  // }

  // useEffect(()=>{
  //   getUsersData()
  // },[])

  return (
    <>
      {/* <table style={styles.table}>
          <thead style={styles.thead}>
            <tr style={styles.tr}>
              <th>id</th>
              <th>created</th>
              <th>requesting by</th>
              <th>state</th>
              <th>service</th>
              <th>descirption</th>
              <th>descirption</th>
            </tr>
          </thead>
        {loading? <LoadingSpinner/> :(
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.created}</td>
                <td>{ticket.requesting_by}</td>
                <td>{ticket.state}</td>
                <td>{ticket.service}</td>
                <td>{ticket.description}</td>
                <td>Actions</td>
              </tr>
            ))}
          </tbody>
        )}
      </table> */}
      {/* <TableTickets data={tickets} /> */}
      <AsyncTable
        columns={columns}
        data={users}
        pageCount={pageCount}
        fetchData={fetchData}
      />
      {isLoading && <LoadingSpinner />}
    </>
  );
}

export default TicketList;