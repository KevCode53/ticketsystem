import './styles.css'
import noImg from '../../assets/No-Image-Placeholder.png'

import { useModal } from '../../hooks/useModal'
import ModalContainer from '../ModalContainer'
import Carousel from '../../containers/Carousel'
import { useState } from 'react'

const index = ({images}:{images:object[]}) => {
  const [imageOpenIndex, setImageOpenIndex] = useState(0)

  const gridImgs = images.length > 0
    ? images.length > 2
    ? images.length > 2
    ? images.length > 3
    ? 'four'
    : 'three'
    : 'two'
    : 'one'
    : 'none'

  const {isOpen, openModal, closeModal} = useModal(false)

  const handleOpenModal = (e:any) => {
    setImageOpenIndex(parseInt(e.target.dataset.index))
    openModal()
  }

  return (
    <>
      <ModalContainer isOpen={isOpen} closeModal={closeModal}>
        <Carousel closeModal={closeModal} initIndex={imageOpenIndex} imgs={images} />
      </ModalContainer>
      <h3>Images</h3>
      <div className="container-imgs card">
        <div className={`list-imgs ${gridImgs}`}>
          {images.length > 0
            ? (
              images.map((img, index) =>(
                <picture key={img.image} data-index={index} className={`_${index}`} onClick={handleOpenModal}>
                  <img onClick={openModal} src={`http://localhost:8000${img.image}`} alt={`image Ticket No. ${img.ticket}`} />
                </picture>
              ))
            )
            : (
              <picture className='_0'>
                <img src={noImg} alt="No image" />
              </picture>
            )
          }
        </div>
      </div>
    </>
  );
}

export default index;