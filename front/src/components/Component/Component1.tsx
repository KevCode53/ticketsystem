import { useEffect, useState } from "react";
import { getMorty } from "../../services";

const Component1 = () => {
  const [morty, setMorty] = useState(null)

  const getApiData = async () => {
    try {
      const result = await getMorty()
      adaptMorty(result.data)
    } catch (error) {}
  }

  const adaptMorty = (data:any) => {
    setMorty(data.name)
  }

  useEffect(()=>{
    getApiData()
  },[])

  return <div>{morty}</div>;
}

export default Component1;