import styles from './styles.module.css'

import { ReactElement, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const index = (
    {title, children}:{
      title:string,
      children: ReactElement
    }
  ) => {
    const [show, setShow] = useState(false)
    
    console.log('Children'+children)
    const toggleShow = () => {
      setShow(!show)
    }
    return (
      <>
        <div 
          className={styles.title}
          onClick={toggleShow}
        >
          <p>{title}</p>
          <ExpandMoreIcon className={`
            ${show && styles.rotateIcon}
          `} />
        </div>
        <div className={`
          ${styles.content}
          ${show && styles.show}
        `}>
          {children}
        </div>
      </>
    );
}

export default index;