import { ReactElement, useEffect, useState } from "react"
import { usePathLocation } from "../../hooks/usePathLocation"

import styles from './styles.module.css'

import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'

const index = ({children}:{children:ReactElement}) => {

  const {show} = usePathLocation()

  return (
    <div className="container">
      {show
        ? (
          <>
            <Sidebar />
            <main className={styles.main}>
              <Topbar />
              {/* <div className={styles.mainContainer}> */}
                {children}
              {/* </div> */}
            </main>
          </>
        )
        : (
          <>{children}</>
        )
      }
    </div>
  )
}

export default index