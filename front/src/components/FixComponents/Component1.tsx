import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useState, useEffect } from "react";
import { getCoolMorty } from "../../services";

const Component1 = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [morty, setMorty] = useState(null)

  const getApiData = async () => {
    try {
      const result = await callEndpoint(getCoolMorty())
      adaptMorty(result.data)
    } catch (error) {}
  }

  const adaptMorty = (data:any) => {
    setMorty(data.name)
  }

  useEffect(()=>{
    getApiData()
  },[])

  console.log(isLoading)
  return (
    <div>{isLoading ? 'LOADING' : morty}</div>
  );
}

export default Component1;