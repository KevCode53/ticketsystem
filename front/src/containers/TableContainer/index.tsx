import { useCallback, useState, useEffect } from 'react';
import AsyncTable from '../../components/AsyncTable/index'
import { useAsync } from '../../hooks/useAsync';
import { useFetchAndLoad } from '../../hooks/useFetchAndLoad';
import { fetchUsers } from '../../services/public.users.test.service';
import { columnsUser } from '../../utilities/columns.users';

const index = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [users, setUsers] = useState([])
  const [pageCount, setPageCount] = useState(0)

  const getApiData = async (page:number) => await callEndpoint(fetchUsers(page+1))

  const adaptData = (data:any) => {
    setUsers(data.data)
    setPageCount(data.total_pages)
    return data.data
  }

  const fetchData = useCallback(async (page:number) => {
    const result = await callEndpoint(fetchUsers(page+1))
    adaptData(result.data)
    // useAsync(getApiData(page), adaptData, () => {}, [])
  },[])

  return (
    <div>
      <AsyncTable
        data={users}
        columns = {columnsUser}
        fetchData={fetchData}
        pageCount={pageCount}
      />
    </div>
  );
}

export default index;