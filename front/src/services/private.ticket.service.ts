import axios from "axios";
import { loadAbort } from "../utilities";

export type ListTableResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: []
}

export const fetchTickets = (page:number) => {
  const controller = loadAbort()
  return {call: axios.get(`http://localhost:8000/tickets/?page=${page}`, {signal: controller.signal}), controller}
}

export const fetchDetailTicket = (id:number) => {
  const controller = loadAbort()
  return {call: axios.get(`http://localhost:8000/tickets/${id}`, {signal: controller.signal}), controller}
}