import styles from './styles.module.css'

import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import SearchIcon from '@mui/icons-material/Search';

// import './App.css'

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import TableContainer from '../../containers/TableContainer'

const index = () => {

  return (
    <div className={styles.container}>

      <div className={styles.quickView}>

        <div className={`
          card
          ${styles.quickCard}
          ${styles.info}
        `}>
            <div className="text">
              <h3>33</h3>
              <span>Ticket's Assigned</span>
            </div>
            <AssignmentIndIcon />
        </div>

        <div className={`
          card
          ${styles.quickCard}
          ${styles.info}
        `}>
            <div className="text">
              <h3>33</h3>
              <span>Ticket's Assigned</span>
            </div>
            <AssignmentIndIcon />
        </div>

        <div className={`
          card
          ${styles.quickCard}
          ${styles.info}
        `}>
            <div className="text">
              <h3>33</h3>
              <span>Ticket's Assigned</span>
            </div>
            <AssignmentIndIcon />
        </div>

      </div>

      <div className={styles.searchContainer}>
        <h3>Ticket's List</h3>
        <form action="" className={styles.searchForm}>
          <div className="input-group">
            <input type="text" required />
            <label htmlFor="">Search Tickets</label>
          </div>
          <button type="submit">
            <SearchIcon fontSize='large' />
            <span>
              Search
            </span>
          </button>
          <small>You can search by name, by ticket number, <b>then press search or enter</b></small>
        </form>
      </div>

      <div className={`${styles.containerList } card`}>
        <TableContainer />
      </div>
      {/* <TableContainer /> */}
    </div>
  )
}

export default index;