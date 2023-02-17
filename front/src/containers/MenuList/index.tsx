import MenuItem from '../../components/MenuItem'
import LogoutBtn from '../../components/LogoutBtn'

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';


const index = () => {
  return (
    <>
      <MenuItem
        name='Dashboard'
        icon={<DashboardIcon/>}
        path="/home"
        message=""
      />

      <MenuItem
        name='Tickets'
        icon={<AssignmentIcon/>}
        path="/tickets"
        message="36"
      />

      <MenuItem
        name='Reports'
        icon={<AssessmentIcon/>}
        path='reports'
        message=''
      />

      <LogoutBtn />
    </>
  )
}

export default index