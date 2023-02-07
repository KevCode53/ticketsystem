import axios from "axios";
import { loadAbort } from "../utilities";


export const fetchTickets = (page:number) => {
  const controller = loadAbort()
  return {call: axios.get(`http://localhost:8000/tickets/?page=${page}`, {signal: controller.signal}), controller}
}

export const fetchDetailTicke = (id:number) => {
  const controller = loadAbort()
  return {call: axios.get(`http://localhost:8000/tickets/${id}`, {signal: controller.signal}), controller}
}