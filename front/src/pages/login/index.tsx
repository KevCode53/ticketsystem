import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.container}>

      <div className={styles.left_top}>
        <picture>
          <img src="vite.svg" alt="" />
          <h1>TICKET<span>SYSTEM</span></h1>
        </picture>
      </div>

      <div className={`
        ${styles.right_bottom}
      `}>
        <h3>Login</h3>
        <div>
          <form action="">

            <div className="input-group">
              <input type="text" required />
              <label htmlFor=""><span>Username</span></label>
            </div>

            <div className="input-group">
              <input type="password" required />
              <label htmlFor=""><span>Password</span></label>
            </div>

            <input type="submit" className='btn-primary' />
          </form>

          <Link to="/">forguet your password</Link>

        </div>
      </div>
    </div>
  )
}

export default index