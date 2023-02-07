import { useCallback, useState, useEffect } from 'react';
import AsyncTable from '../../components/AsyncTable/index'
import { useAsync } from '../../hooks/useAsync';
import { useFetchAndLoad } from '../../hooks/useFetchAndLoad';
import { fetchTickets } from '../../services/private.ticket.service';
import { fetchUsers } from '../../services/public.users.test.service';
import { columns } from '../../utilities/tickets.columns';

import styles from './styles.module.css'

const button = () => {
  return <button>ver</button>
}

const index = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [users, setUsers] = useState([])
  const [pageCount, setPageCount] = useState(0)

  const getApiData = async (page:number) => await callEndpoint(fetchUsers(page+1))

  const adaptData = (data:any) => {
    setUsers(data.results)
    setPageCount(data.count)
    return data.data
  }

  const fetchData = useCallback(async (page:number) => {
    const result = await callEndpoint(fetchTickets(page+1))
    adaptData(result.data)
  },[])

  return (
    <div className={styles.tableContainer}>
      <AsyncTable
        data={users}
        columns = {columns}
        fetchData={fetchData}
        pageCount={pageCount}
      />
    </div>
  );
}

export default index;