import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useState, useEffect } from "react";
import { getCoolRyck } from "../../services";

const Component2 = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [rick, setRick] = useState(null)

  const getApiData = async () => {
    try {
      const result = await callEndpoint(getCoolRyck())
      adaptRick(result.data)
    } catch (error) {}
  }

  const adaptRick = (data:any) => {
    setRick(data.name)
  }

  useEffect(()=>{
    getApiData()
  },[])

  console.log(isLoading)
  return (
    <div>{isLoading ? 'LOADING' : rick}</div>
  );
}

export default Component2;