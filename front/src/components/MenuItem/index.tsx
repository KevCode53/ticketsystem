import { Link } from 'react-router-dom';
import { usePathLocation } from '../../hooks/usePathLocation';
import { useMenuContext } from '../../hooks/useMenuContext';

import styles from './styles.module.css'

import {ReactElement, useEffect, useState} from 'react';

const index = (
  {path, icon, name, message}:{
    path:string,
    icon:ReactElement,
    name: string,
    message: string
  }
) => {

  const {pathname} = usePathLocation()
  const {closeMenu, isExpand} = useMenuContext()
  const [isActive, setActive] = useState(false)


  useEffect(()=>{
    if (pathname === path) {
      setActive(true)
    } else {
      setActive(false)
    }
  },[pathname])


  return (
    <Link
      onClick={closeMenu}
      className={`
        ${styles.menuItem}
        ${isActive && styles.active}
        ${isExpand && styles.contract}
      `}
      to={path}
    >
      {icon}
      <h3>{name}</h3>
      {message.length > 0
        ? (
          <span>{message}</span>
        )
        : (<></>)
      }
    </Link>
  );
}

export default index;