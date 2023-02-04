import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './App.css'

import DashboardFix from '../../containers/DashboardFix'
import TableContainer from '../../containers/TableContainer'

const index = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <DashboardFix /> */}
      <TableContainer />
    </div>
  )
}

export default index;