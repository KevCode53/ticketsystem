import { ReactElement, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import './styles.css'

const index = ({children, isOpen, closeModal}:{
  children:ReactNode,
  isOpen:boolean,
  closeModal:() => void
}) => {
  const handleModalContainClick = (e:any) => {
    e.stopPropagation()
  }
  const portalNode = document.createElement("div")

  useEffect(()=>{
    document.body.appendChild(portalNode)

    return () => {
      portalNode.remove()
    }
  },[portalNode])

  return createPortal(
    <article onClick={closeModal} className={`layout ${isOpen && 'is-open'}`}>
      <div className="content" onClick={handleModalContainClick}>
        {/* <button className="modal-close" onClick={closeModal}>
          <CloseIcon fontSize="large" />
        </button> */}
        {children}
      </div>
    </article>,
    portalNode
  );
}

export default index;