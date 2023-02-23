import styles from './styles.module.css'

import Comment from '../../components/Comment'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { useEffect, useState } from 'react';


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

  return (
    <div className={`
      ${styles.CommentsListCotainer}
    `}>
      <div onClick={toggleDiv} className={styles.title}>
        <div className={styles.title_container}>
          {comments.length > 0
            ? (
                <h4>Show Comments <small> • {comments.length} {comments.length > 1
                  ? 'comments' : 'comment'}</small></h4>
              )
            : <h4>This ticket has no comments</h4>
          }
        </div>
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
            <Comment key={comment.id}  data={comment} />
          ))
        )}
      </div>
      <form action="" className={styles.comment_form}>
        <textarea name="" id="" rows="1" placeholder='Add a comment'></textarea>
        <div className={styles.buttons}>
          <button>
            <CameraAltIcon fontSize='large' />
          </button>
          <button>
            <SendIcon fontSize='large' />
          </button>
        </div>
      </form>
    </div>
  );
}

export default index;