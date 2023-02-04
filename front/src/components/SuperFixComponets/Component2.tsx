import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useState, useEffect } from "react";
import { getCoolRyck } from "../../services";
import { useAsync } from "../../hooks/useAsync";

const Component2 = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [rick, setRick] = useState(null)

  const getApiData = async () => await callEndpoint(getCoolRyck())

  const adaptRick = (data: any) => setRick(data.name)

  useAsync(getApiData, adaptRick, ()=>{}, [])

  console.log(isLoading)
  return (
    <div>{isLoading ? 'LOADING' : rick}</div>
  );
}

export default Component2;