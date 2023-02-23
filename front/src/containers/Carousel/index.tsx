import './styles.css'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';

import { useEffect, useState } from 'react';

interface image {
  ticket:number;
  image:string
}

const index = (
  {imgs, initIndex, closeModal}:{imgs:image[], initIndex:number, closeModal:() => void}
  ) => {
  const [selectedIndex, setSelectedIndex] = useState(initIndex)
  const [selectedImg, setSelectedImg] = useState({})
  const [loaded, setLoaded] = useState(false)

  const selectNewImage = (index:number, images:image[], next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next
        ? (condition ? selectedIndex + 1 : 0)
        : condition ? selectedIndex - 1: images.length
      setSelectedImg(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500);
  }

  const previous = () => {
    selectNewImage(selectedIndex, imgs, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, imgs)
  }

  useEffect(()=>{
    setSelectedImg(imgs[initIndex])
  },[])

  return (
    <div className='img-container'>

      <button className="modal-close" onClick={closeModal}>
        <CloseIcon fontSize="large" />
      </button>

      {selectedImg
        &&<img onLoad={() => setLoaded(true)} className={loaded ?'loaded' :''} src={`http://127.0.0.1:8000${selectedImg.image}`} alt="" />
      }
      <div className="controller">
        {imgs.length > 1 &&
          <>
            <button className='previous' onClick={previous}><ArrowBackIosIcon/></button>
            <button className='next' onClick={next}><ArrowForwardIosIcon/></button>
          </>
        }
      </div>
    </div>
  );
}

export default index;