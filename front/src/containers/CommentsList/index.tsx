import styles from './styles.module.css'

import Comment from '../../components/Comment'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';


export interface comment {
  created: string;
  created_by: {};
  comment: string
}

const data = {
  created: '14-02-2023',
  created_by: {
    id: 1,
    username: 'User',
    image:'https://randomuser.me/api/portraits/lego/7.jpg'
  },
  comment: '<p>Hola este es mi comentario, espero que todo este bien</p>'
}

const data2 = {
  created: '14-02-2023',
  created_by: {
    id: 1,
    username: 'User',
    image:'https://randomuser.me/api/portraits/lego/7.jpg'
  },
  comment: '<p>Hola este es mi comentario, espero que todo este bien de lo contrario no se que pasara y que me llevar, espero que se logre apreciar el comentario XD, pacman es redondo</p> <p>Hola este es mi comentario, espero que todo este bien de lo contrario no se que pasara y que me llevar, espero que se logre apreciar el comentario XD, pacman es redondo</p> <p>Hola este es mi comentario, espero que todo este bien de lo contrario no se que pasara y que me llevar, espero que se logre apreciar el comentario XD, pacman es redondo</p>'
}

const index = ({comments}:any) => {

  const [isVisible, setIsVisible] = useState(false)

  const toggleDiv = () => {
    setIsVisible(!isVisible)
  }

  console.log(comments)

  return (
    <div className={`
      card
      ${styles.CommentsListCotainer}
    `}>
      <div onClick={toggleDiv} className={styles.title}>
        <h4>Show Comments</h4>
        <ExpandMoreIcon className={`
          ${isVisible && styles.rotateIcon}
        `} />
      </div>
      <div className={`
        ${styles.commentsList}
        ${isVisible && styles.show}
      `}>
        {comments !== undefined && (
          comments.map((comment:any) => (
            <Comment data={comment} />
          ))
        )}
      </div>
    </div>
  );
}

export default index;