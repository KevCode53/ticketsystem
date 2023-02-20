import styles from './styles.module.css'


import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggler from '../UI/ThemeToggler'

import { useMenuContext } from '../../hooks/useMenuContext'


const index = () => {

  const {openMenu} = useMenuContext()

  return (
    <nav className={styles.topbar}>
      <div className={styles.topbar_container}>

        <button
          className={styles.menuIcon}
          onClick={openMenu}
        >
          <MenuIcon />
        </button>

        <ThemeToggler />

        <div className={styles.profileInfo}>
          <div className="info">
            <p>Hey, <b>User</b></p>
            <small>Admin</small>
          </div>
          <picture className="profilePhoto">
            <img src="https://randomuser.me/api/portraits/lego/7.jpg" alt="" />
          </picture>
        </div>
        
      </div>
    </nav>
  )
}

export default index