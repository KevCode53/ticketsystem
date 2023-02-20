import styles from './styles.module.css'

import Comment from '../../components/Comment'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';


export interface comment {
  created: string;
  created_by: {};
  comment: string
}

const index = ({comments}:any) => {

  const [isVisible, setIsVisible] = useState(false)

  const toggleDiv = () => {
    setIsVisible(!isVisible)
  }

  console.log(comments)

  return (
    <div className={`
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