import React from 'react'
import styles from './styles.module.scss'
const Layout = ({children}:{children:React.ReactElement}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Layout;