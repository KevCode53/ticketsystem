// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TicketType } from '@/models/type-whit-tickets'
import { ticketsList } from '@/utilities/data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<TicketType>>
) {
  res.status(200).json(ticketsList)
}
