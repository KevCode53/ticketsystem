export type TicketType = {
  id: number,
  created: string,
  updated: string,
  state: number,
  description: string,
  service: string,
  created_by: number,
  updated_by: number | null,
  requesting_by: number,
  assigned_to: number | null,
  images: Array<string>
  actions?: Array<number> | null
}