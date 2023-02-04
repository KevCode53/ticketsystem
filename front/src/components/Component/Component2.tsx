import { useState, useEffect } from "react"
import { getRick } from "../../services"

const Component2 = () => {
  const [rick, setRick] = useState(null)

  const getApiData = async () => {
    try {
      const result = await getRick()
      adaptRick(result.data)
    } catch (error) {}
  }

  const adaptRick = (data:any) => {
    setRick(data.name)
  }

  useEffect(()=>{
    getApiData()
  },[])

  return <div>{rick}</div>;
}

export default Component2;