import { useState } from "react"

export const useModal = (initValue=false) => {
  const [isOpen, setOpen] = useState(initValue)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return {isOpen, openModal, closeModal}
}