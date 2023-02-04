import { AxiosResponse } from "axios";
import { useEffect } from "react";

export const useAsync = (
  asyncFn: ()=>Promise<AxiosResponse<any, any>>,
  successFunction: Function,
  returnFunction: Function,
  dependencies: any[] = []
) =>{
  useEffect(()=>{
    let isActive = true // inicializacion
    asyncFn().then(result => { // Peticion
      if (isActive) successFunction(result.data) // Valida si sigue activo para realizar success
    })
    return () => {
      returnFunction && returnFunction()
      isActive = false
    }
  }, dependencies)
}