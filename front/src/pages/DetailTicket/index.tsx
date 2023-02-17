import { useFetchAndLoad } from "../../hooks/useFetchAndLoad";
import { useAsync } from "../../hooks/useAsync";
import { fetchDetailTicket } from "../../services/private.ticket.service";

import styles from './styles.module.css'
import { useState } from "react";

import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';

import Accordion from '@mui/material/Accordion';
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


const index = () => {
  const {isLoading, callEndpoint} = useFetchAndLoad()
  const [data, setData] = useState({})

  const getApiData = async(id:number) => await callEndpoint(fetchDetailTicket(52))

  const adaptData = (data:number) => setData(data)

  useAsync(getApiData, adaptData, ()=>{}, [])

  return (
    <div className={styles.container}>

      <div className="info">
        <h2>Ticket No. {data.id}</h2>
        <div className="">
          <span>{data.created}</span>
          <span>{data.status}</span>
        </div>
      </div>

      <div className={styles.content}>

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
                {/* <p>{data.requesting_by}</p> */}
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

      </div>


    </div>
  );
}

export default index;