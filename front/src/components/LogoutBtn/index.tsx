import styles from './styles.module.css'
import LogoutIcon from '@mui/icons-material/Logout';

import { useMenuContext } from '../../hooks/useMenuContext';

const index = () => {

  const {isExpand} = useMenuContext()

  return (
    <button className={`
      ${styles.logoutBtn}
      ${isExpand && styles.contract}
    `}>
      <LogoutIcon />
      <h3>Logout</h3>
    </button>
  )
}

export default index