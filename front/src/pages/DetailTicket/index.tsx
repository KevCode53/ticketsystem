import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useAsync } from "../../hooks/useAsync";
import { fetchDetailTicket } from "../../services/private.ticket.service";

import styles from './styles.module.css'
import { useEffect, useState } from "react";


import Accordion from '../../components/UI/Accordion'

import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';

// import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import CommentsList from '../../containers/CommentsList'
import Breadcrumbs from "../../components/UI/Breadcrumbs";
import { validateTicketStates } from "../../utilities/ticketsStateList";


const index = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [data, setData] = useState({})
  const [showOptions, setShowOptions] = useState(false)

  const getApiData = async(id:number) => await callEndpoint(fetchDetailTicket(52))

  const adaptData = (data:number) => setData(data)

  useAsync(getApiData, adaptData, ()=>{}, [])

  const showOptionsHandler = () => {
    setShowOptions(!showOptions)
  }

  const state = validateTicketStates(data.state)

  console.log(data)
  return (

  <div className={styles.container}>

    <div className={styles.titleRow}>

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

      <button>
        <EditIcon />
        <span>Change Status</span>
      </button>

    </div>

    {/* ------------ DETAILS ------------ */}

    <div className={styles.commentsImagesRow}>
      <div className={styles.imagesContainer}>
        <h3>Images</h3>
        <div className={styles.images}>
          {data.images && data.images.map((image) => (
            <img src={`http://127.0.0.1:8000${image.image}`} alt="" />
          ))}
        </div>
      </div>
      {/* <h3>Comments</h3> */}
      <CommentsList className={styles.commentsContainer} comments={data.comments} />
    </div>
    

      {/* <div className={styles.info}>
        <div className={styles.titleSection}>
          <h2>Ticket No. {data.id}</h2>
          <div className={styles.mobileOptions}>
            <button onClick={showOptionsHandler}>
              <MoreVertIcon />
            </button>
            <div className={`
              ${showOptions && styles.showOptions}
            `}>
              <button>In Progres</button>
              <button>Finalized</button>
              <button>Refused</button>
            </div>
          </div>
        </div>
        <div className="">
          <span>{data.created}</span>
          <span>{data.status}</span>
        </div>
      </div> */}

      {/* <div className={styles.content}>

        <div className={styles.left}>

          <div className={styles.row}>

            <div className="details">

              <h3>Details</h3>

              <div className="card">
                <div className="service">
                  <h4>Service</h4>
                  <p>{data.service}</p>
                </div>

                <div className="description">
                  <h4>Description</h4>
                  <p>{data.description}</p>
                </div>
              </div>

            </div>

            <div className="client">
              <h3>Person</h3>
              <div className="card">
                <h4>Requesting by:</h4>
                {data.requesting_by 
                  ? (
                    <>
                      <p>
                        Username:
                        <span> {data.requesting_by.username}</span>  
                      </p>
                      <p>
                        Email:
                        <span> {data.requesting_by.email}</span>
                      </p>
                    </>
                  )
                  : (<></>)
                }
              </div>
            </div>

          </div>


          <div className={styles.row}>
            <div className={styles.images}>
              <h3>Images</h3>
              <div className="card">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illo temporibus quasi dolorum ipsum iusto voluptatibus consectetur molestiae mollitia maiores corporis soluta sequi. A voluptates repellendus beatae consectetur voluptatum cum quaerat quos laboriosam sunt officia excepturi voluptas labore culpa veniam saepe ipsam architecto, repellat nihil reiciendis. Culpa, vitae? Amet, vero.</p>
              </div>
            </div>
          </div>

          <CommentsList comments={data.comments} />

        </div>

        <div className={styles.right}>
          <div className={styles.actions}>
            <h3>Change Status</h3>

            <div className="card">
              <button className="btn btn-info">
                <AutorenewIcon />
                In Progress
              </button>
              <button className="btn btn-success">
                <CheckCircleOutlineIcon />
                Finalized
              </button>
              <button className="btn btn-danger">
                <DoDisturbAltIcon />
                Refused
              </button>
            </div>
          </div>
        </div>

      </div> */}


    </div>
  );
}

export default index;