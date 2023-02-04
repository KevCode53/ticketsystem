import { useEffect, useState } from "react"
import { getMorty, getRick } from "@/services/public.service"

const Component1 = () => {
  const [morty, setMorty] = useState(null)
  const getApiData = async() => {
    try {
      const result = await getMorty();
      adaptMorty(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  const adaptMorty = (data:any) => {
    setMorty(data.name)
  }

  useEffect(()=>{
    getApiData()
  },[])
  return <div>{morty}</div>
}

const Component2 = () => {
  const [rick, setRick] = useState(null)
  const getApiData = async() => {
    try {
      const result = await getRick();
      adaptRick(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  const adaptRick = (data:any) => {
    setRick(data.name)
  }

  useEffect(()=>{
    getApiData()
  },[])
  return <div>{rick}</div>
}

const Dashboard= () => {

  const [itemOne, setItenOne] = useState(true)
  const [itemTwo, setItenTwo] = useState(false)
  const showItemOne = () => {
    setItenTwo(false),
    setItenOne(true)
  }
  const showItemTwo = () => {
    setItenTwo(true),
    setItenOne(false)
  }

  return (
    <div>
      <h3>Buenas mi gente!</h3>
        <div>
          <div>
            <button onClick={showItemOne}>Item One</button>
            <button onClick={showItemTwo}>Item Two</button>
          </div>
          {itemOne === true ? (<Component1 />) : (<Component2 />)}
        </div>
    </div>
  );
}

export default Dashboard;