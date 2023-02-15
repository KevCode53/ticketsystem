import styles from './styles.module.css'

import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const index = () => {
  return (
    <div className={styles.themeToggler}>
      <span className={styles.active}>
        <Brightness7Icon />
      </span>
      <span>
        <DarkModeIcon />
      </span>
    </div>
  )
}

export default index