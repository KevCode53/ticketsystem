import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useAsync } from "../../hooks/useAsync";
import { fetchDetailTicke } from "../../services/private.ticket.service";


const index = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()

  const getApiData = async(id:number) => await callEndpoint(fetchDetailTicke(52))

  const adaptData = (data:number) => console.log(data)

  useAsync(getApiData, adaptData, ()=>{}, [])

  return (
    <h2>Detail ticket</h2>
  );
}

export default index;