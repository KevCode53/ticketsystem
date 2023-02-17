import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const noMenuEndpoints = [
  '',
]

export const usePathLocation = () => {
  const location = useLocation()
  let {pathname} = location
  const [show, setShow] = useState(true)

  useEffect(()=>{
    noMenuEndpoints.forEach(val => {
      if (pathname.length <= 1) {
        setShow(false)
      }
    })
  },[])


  return {show, pathname}
}