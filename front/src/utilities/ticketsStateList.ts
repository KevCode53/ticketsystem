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