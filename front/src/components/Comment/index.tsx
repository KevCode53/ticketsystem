import styles from './styles.module.css'


const index = ({data}:any) => {
  return (
    <div className={styles.commentContainer}>
      <picture>
        <img src={`http://127.0.0.1:8000${data.image}`} alt="" />
      </picture>
      <div className={styles.comment}>
        <div className={styles.commentHeader}>
          <small>{data.username}</small>
          <span> | </span>
          <small>{data.created}</small>
        </div>
        <div className={styles.commentText}>
          <p>{data.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default index;