import { useEffect, useState } from "react"
import { getCoolMorty, getCoolRyck} from "@/services/public.service"
import { useFetchAndLoad } from "@/hooks/useFetchAndLoad"

const Component1 = () => {
  const {loading, callEndpoint} = useFetchAndLoad()
  const [morty, setMorty] = useState(null)

  const getApiData = async() => {
    try {
      const result = await callEndpoint(getCoolMorty());
      await adaptMorty(result.data)
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
  return <div>{loading ? 'LOADING' : morty}</div>
}

const Component2 = () => {
  const {loading, callEndpoint} = useFetchAndLoad()
  console.log(loading)

  const [rick, setRick] = useState(null)
  const getApiData = async() => {
    try {
      const result = await callEndpoint(getCoolRyck())
      await adaptRick(result.data)
    } catch (error) {
      console.error(error)
    }
  }

  const adaptRick = (data:any) => {
    console.log(data)
    setRick(data.name)
  }

  useEffect(()=>{
    getApiData()
  },[])
  return <div>{loading ? 'Loading..!' : rick}</div>
}

const DashboardFix = () => {

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

  useEffect(() => {

  },[])

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

export default DashboardFix ;