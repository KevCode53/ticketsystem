import axios from "axios";
import { loadAbort } from "@/utilities";

export const getTickets = () => {
  const controller = loadAbort()
  return {call: axios.get('http://localhost:3000/api/tickets', {signal: controller.signal}), controller}
}