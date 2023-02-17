import { useEffect, useState, useContext } from "react";
import { MenuContext } from "../context/counterContext";

export const useMenuContext = () => {
  const {isOpen, setOpen, isExpand, setExpand} = useContext(MenuContext)

  const openMenu = () => {
    setOpen(true)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const togggleExpand = () => {
    setExpand(!isExpand)
  }

  return {
    isExpand,
    togggleExpand,
    isOpen,
    openMenu,
    closeMenu
  }
}