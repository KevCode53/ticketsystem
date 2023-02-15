import { createContext, ReactElement, ReactNode, useState } from "react";

interface IMenuContext {
  isOpen: boolean;
  isExpand: boolean;
}

export const MenuContext = createContext({})

export const MenuContextProvider = ({children}:{children:ReactNode}):ReactElement => {
  const [isOpen, setOpen] = useState()
  const [isExpand, setExpand] = useState()
  return (
    <MenuContext.Provider value={{isOpen, setOpen, isExpand, setExpand}}>
      {children}
    </MenuContext.Provider>)
}
