import axios from "axios";
import { loadAbort } from "@/utilities";

export const fetchUsers = (page:number) => {
  const controller = loadAbort()
  return {call: axios.get(`https://reqres.in/api/users?page=${page}`, {signal: controller.signal}), controller}
}

export const getUsers = async (page:number) => {
  const response = await axios.get(`https://reqres.in/api/users?page=${page}`)
  const { data } = response
  return data
}