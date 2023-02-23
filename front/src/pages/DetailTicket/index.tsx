import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useAsync } from "../../hooks/useAsync";
import { fetchDetailTicket } from "../../services/private.ticket.service";
import { usePathLocation } from "../../hooks/usePathLocation";
import { useParams } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

import styles from './styles.module.css'

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

import ModalContainer from '../../containers/ModalContainer'
import CommentsList from '../../containers/CommentsList'
import ImagesList from '../../containers/ImagesList'
import { Breadcrumbs, Link, Typography } from "@mui/material";

import { validateTicketStates, typeTicketState } from "../../utilities/ticketsStateList";


const index = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [data, setData] = useState({})
  const [showOptions, setShowOptions] = useState(false)
  const params = useParams()

  const getApiData = async(id:number) => await callEndpoint(fetchDetailTicket(params.id))

  const adaptData = (data:number) => setData(data)

  useAsync(getApiData, adaptData, ()=>{}, [])

  const showOptionsHandler = () => {
    setShowOptions(!showOptions)
  }

  const state = validateTicketStates(data.state)

  const {isOpen, openModal, closeModal} = useModal()

  return (
  <>
    <ModalContainer isOpen={isOpen} closeModal={closeModal}>
      <form action="" className={styles.form_state}>
        <button className="modal-close" onClick={closeModal}>
          <CloseIcon fontSize="large" />
        </button>
        <h3>Ticket No. {data.id}</h3>
        <div className=''>
            <p>Service: {data.service}</p>
            <p>Description: {data.description}</p>
        </div>
        <div className={styles.content_options}>
          <small>Select the state to which the ticket will change</small>
          <select name="status" id="state">
            {typeTicketState.map(type => (
              <option value={type.number}>{type.text}</option>
            ))}
          </select>
          <small>Add a comment corresponding to the status change</small>
          <textarea name="" id="" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">Save</button>
      </form>
    </ModalContainer>


    <div className={styles.container}>

      {/* --------- TITLE TICKET ROW --------- */}

      <div className={styles.titleRow}>

        <div className={styles.breadcrumbs}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link fontSize="medium" underline="hover" color="inherit" href="/home">Home</Link>
            <Link fontSize="medium" underline="hover" color="inherit" href="/tickets">Tickets</Link>
            <Typography fontSize="medium" color="text.primary">Ticket No. {data.id}</Typography>
          </Breadcrumbs>
        </div>

        <div className={styles.title_container}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <h2>Ticket No. {data.id}</h2>
              <div className={`
                ${styles.state}
                ${state}
              `}>
                <p>{data.state_word}</p>
              </div>
            </div>
            <div className={styles.info}>
              <p>Created: <small>{data.created}</small></p>
            </div>
          </div>

          <button onClick={openModal}>
            <EditIcon />
            <span>Change Status</span>
          </button>
        </div>

      </div>


      {/* ------------ DETAILS ------------ */}

      {/* --------- REQUESTING AND SERVICE --------- */}

      <div className={styles.requestingService}>

        {/* ------------ REQUESTING ------------ */}

        <div className="">
          <h3>Requesting By</h3>
          <div className={`${styles.requesting} card`}>
            <div className={styles.requesting_content}>
              <picture>
                {data.requesting_by
                  ? data.requesting_by.profile.image
                    ? (<img src={`http://127.0.0.1:8000${data.requesting_by.profile.image}`} />)
                    : (<img src='No-Image-Placeholder.png' />)
                  : (<img src='No-Image-Placeholder.png' />)
                }
              </picture>
              <div className={styles.info_user}>
                <p>Email: <span>{ data.requesting_by &&
                  data.requesting_by.email
                }</span></p>
                <p>Username: <span>{ data.requesting_by &&
                  data.requesting_by.username
                }</span></p>
                <p>phone:</p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------ SERVICE ------------ */}

        <div className="">
          <h3>Service</h3>
          <div className={`${styles.service} card`}>
            <div className={styles.service_content}>
              <p>Service Type: <span>{data.service}</span></p>
              <p>Description: <span>{data.description}</span></p>
            </div>
          </div>
        </div>

      </div>

      {/* --------- IMAGES AND COMMENTS --------- */}

      <div className={styles.commentsImagesRow}>

        {/* --------- IMAGES --------- */}

        <div className="">
          {data.images &&
            data.images.length > 0 ? <ImagesList images={data.images} /> : (<></>) } 
        </div>

        {/* --------- COMMENTS --------- */}
        {data.comments && <CommentsList className={styles.commentsContainer} comments={data.comments} /> }
      </div>
    </div>
    </>
  );
}

export default index;