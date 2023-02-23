import { ReactElement } from 'react'
import './styles.css'

import ModalContainer from '../../containers/ModalContainer'
import { useModal } from '../../hooks/useModal'


const images1_1 = [
  '1.jfif',
]
const images1_2 = [
  '2.jfif',
]
const images1 = [
  '3.png',
]
const images2 = [
  '2.jfif',
  '3.png'
]
const images3 = [
  '1.jfif',
  'Logo.png',
  'MP_logo.png'
]
const images4 = [
  '1.jfif',
  'Logo.png',
  'MP_logo.png',
  '3.png'
]


const index = () => {
  const {isOpen, openModal, closeModal} = useModal(false)
  return (
    <>
    <ModalContainer isOpen={isOpen} closeModal={closeModal}>
      {/* <h3>Modal</h3>
      <p>This is a new modal</p> */}
      <img src="https://placeimg.com/200/200/animals" alt="" />
    </ModalContainer>
    <div className="imgsContainer">
      <h3>One Images</h3>
      <div className="container-list one" onClick={openModal}>
        {images1.map((image, index) =>
          <picture className={`_${index}`}>
            <img src={image} alt="" />
          </picture>
        )}
      </div>
    </div>

    <div className="imgsContainer">
      <h3>One Images</h3>
      <div className="container-list one">
        {images1_1.map((image, index) =>
          <picture className={`_${index}`}>
            <img src={image} alt="" />
          </picture>
        )}
      </div>
    </div>

    <div className="imgsContainer">
      <h3>One Images</h3>
      <div className="container-list one">
        {images1_2.map((image, index) =>
          <picture className={`_${index}`}>
            <img src={image} alt="" />
          </picture>
        )}
      </div>
    </div>

    <div className="imgsContainer">
      <h3>Two Images</h3>
      <div className="container-list two">
        {images2.map((image, index) =>
          <picture className={`_${index}`}>
            <img src={image} alt="" />
          </picture>
        )}
      </div>
    </div>

    <div className="imgsContainer">
      <h3>Images</h3>
      <div className="container-list three">
        {images3.map((image, index) =>
          <picture className={`_${index}`}>
            <img src={image} alt="" />
          </picture>
        )}
      </div>
    </div>

    <div className="imgsContainer">
      <h3>Images</h3>
      <div className="container-list four">
        {images4.map((image, index) =>
          <picture className={`_${index}`}>
            <img src={image} alt="" />
          </picture>
        )}
      </div>
    </div>

    </>
  );
}

export default index;