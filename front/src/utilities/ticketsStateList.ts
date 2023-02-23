export const typeTicketState = [
  {
    number:-1,
    text: 'Refused'
  },
  {
    number: 1 ,
    text:'Assigned'
  },
  {
    number: 2,
    text: 'In Process'
  },
  {
    number: 3,
    text: 'Finalized'
  },
  {
    number: 4,
    text: 'Created'
  },
]

export const validateTicketStates = (state:number) => {
  switch(state) {
    case -1:
      return 'refused'
    case 1:
      return 'assigned'
    case 2:
      return 'in_process'
      case 3:
        return 'finalized'
    default:
      return 'created'
  }
} 