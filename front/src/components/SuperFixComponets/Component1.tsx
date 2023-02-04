import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useState, useEffect } from "react";
import { getCoolMorty } from "../../services";
import { useAsync } from "../../hooks/useAsync";

const Component1 = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [morty, setMorty] = useState(null)

  const getApiData = async () => await callEndpoint(getCoolMorty())

  const adaptMorty = (data: any) => setMorty(data.name)

  useAsync(getApiData, adaptMorty, ()=>{}, [])

  console.log(isLoading)
  return (
    <div>{isLoading ? 'LOADING' : morty}</div>
  );
}

export default Component1;