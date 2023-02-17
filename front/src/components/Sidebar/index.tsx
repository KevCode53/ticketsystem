import styles from './styles.module.css'
import { Link } from 'react-router-dom';

import { useMenuContext } from '../../hooks/useMenuContext'

import MenuList from '../../containers/MenuList'

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';

const index = () => {

  const {isOpen, closeMenu, isExpand, togggleExpand} = useMenuContext()

  return (
    <aside className={
      `
        ${isOpen && styles.menuOpen}
        ${isExpand && styles.contract}
        ${styles.sidebar}
      `
    }>

      <div className={styles.container}>

        <div className={styles.top}>
          <picture>
            <img src="vite.svg" alt="" />
            <h3>
              TICKET
              <span>SYSTEM</span>
            </h3>
          </picture>
          <button
            onClick={closeMenu}
            className={styles.btnCloseMenu}>
            <CloseIcon />
          </button>
          <button
            onClick={togggleExpand}
            className={styles.btnContractMenu}>
            <KeyboardArrowLeftIcon />
          </button>
        </div>

        <div className={styles.userInfo}>
          <picture>
            <img src="vite.svg" alt="" />
            <h3>User Control</h3>
          </picture>
          <small>Admin</small>
        </div>

        <div className={styles.menuList}>
          <MenuList />
        </div>

      </div>

    </aside>
  )
}

export default index