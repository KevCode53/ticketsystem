import { useState } from 'react'
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react.svg'

import Card from '../../components/UI/Card'

import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

import styles from './styles.module.css'

const index = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>

        <div className={styles.top}>
          <div className={styles.logo}>
            <img src={reactLogo} alt="" />
            <h2>TICKET<span>SYSTEM</span></h2>
          </div>
          <div className="close">
            <span>
              <CloseIcon />
            </span>
          </div>
        </div>

        <div className={styles.sidebar}>

          <Link to="/" className={styles.active}>
            <span>
              <DashboardIcon />
            </span>
            <h3>Dashboard</h3>
          </Link>

          <Link to="/">
            <span>
              <AssignmentIcon />
            </span>
            <h3>Tickets</h3>
            <span className={styles.message}>45</span>
          </Link>

          <Link to="/">
            <span>
              <DashboardIcon />
            </span>
            <h3>Dashboard</h3>
          </Link>

          <Link to="/">
            <span>
              <DashboardIcon />
            </span>
            <h3>Dashboard</h3>
          </Link>

          <Link to="/">
            <span>
              <DashboardIcon />
            </span>
            <h3>Dashboard</h3>
          </Link>

          <Link to="/">
            <span>
              <LogoutIcon />
            </span>
            <h3>Logout</h3>
          </Link>

        </div>

      </aside>

       {/* ------- END OF ASIDE ------- */}
       
       <main className={styles.main}>
        <h1>Dashboard</h1>

        <div className={styles.date}>
          <input type="date" />
        </div>

        <div className={styles.insights}>

          <div className="sales">
            <span><AnalyticsIcon/></span>

            <div className={styles.middle}>
              
              <div className="left">
                <h3>Total Tickets</h3>
                <h1>50</h1>
              </div>

              <div className={styles.progress}>
                <svg>
                  <circle cx='38' cy='38' r='36' />
                </svg>

                <div className="number">
                  <p>81%</p>
                </div>

              </div>

            </div>

            <small>Last 24 Hours</small>

          </div>
          {/* ------- END OF SALES ------- */}
          
          <div className="sales">
            <span><AnalyticsIcon/></span>

            <div className={styles.middle}>
              
              <div className="left">
                <h3>Total Tickets</h3>
                <h1>50</h1>
              </div>

              <div className={styles.progress}>
                <svg>
                  <circle cx='38' cy='38' r='36' />
                </svg>

                <div className="number">
                  <p>81%</p>
                </div>

              </div>

            </div>

            <small>Last 24 Hours</small>

          </div>
          {/* ------- END OF SALES ------- */}

          <div className="sales">
            <span><AnalyticsIcon/></span>

            <div className={styles.middle}>
              
              <div className="left">
                <h3>Total Tickets</h3>
                <h1>50</h1>
              </div>

              <div className={styles.progress}>
                <svg>
                  <circle cx='38' cy='38' r='36' />
                </svg>

                <div className="number">
                  <p>81%</p>
                </div>

              </div>

            </div>

            <small>Last 24 Hours</small>

          </div>
          {/* ------- END OF SALES ------- */}

        </div>

        {/* ------- END OF INSIGHTS------- */}

        <div className={styles.recent}>
          <h2>Recent Tickets</h2>

          {/* <div className={styles.tableContainer}> */}
          
          <Card>

            <table className='table'>

              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Number</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

                <tr>
                  <td>Foldable Mini Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td>Pendig</td>
                  <td><a href="">Details</a></td>
                </tr>

              </tbody>
            </table>

          </Card>
          
          {/* </div> */}
          
          <Link to='/tickets'>Show all</Link>
        </div>

       </main>
      {/* ------- END OF MAIN ------- */}

      <div className={styles.right}>

        <div className={styles.rightTop}>
          <button className={styles.menuBtn} id="menuBtn">
            <MenuIcon />
          </button>

          <div className={styles.themeToggler}>
            <span className={styles.active}>
              <Brightness7Icon />
            </span>
            <span>
              <DarkModeIcon />
            </span>
          </div>

          <div className={styles.profile}>
            <div className="info">
              <p>Hey, <b>User</b></p>
              <small>Admin</small>
            </div>
            <div className="profile-photo">
              <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" alt="" />
            </div>
          </div>

        </div>
        {/* ------- END OF TOP ------- */}

        <div className={styles.recentUpdates}>
          <h2>Recent Updates</h2>

          <div className={styles.updates}>

            <div className={styles.update}>
              <div className="profile-photo">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Mike Tyson</b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga dicta nam illum quos excepturi.
                </p>
                <small>2 Minutes Ago</small>
              </div>
            </div>

            <div className={styles.update}>
              <div className="profile-photo">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Mike Tyson</b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga dicta nam illum quos excepturi.
                </p>
                <small>2 Minutes Ago</small>
              </div>
            </div>

            <div className={styles.update}>
              <div className="profile-photo">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
              </div>
              <div className="message">
                <p>
                  <b>Mike Tyson</b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga dicta nam illum quos excepturi.
                </p>
                <small>2 Minutes Ago</small>
              </div>
            </div>

          </div>

        </div>
        {/* ------- END OF UPDATES ------- */}

        <div className={styles.Analitycs}>
          <h2>Sales Analitycs</h2>

          <div className={styles.item}>
            <div className="icon">
              <ConfirmationNumberIcon />
            </div>
            <div className="info">
              <h3>TICKETS SUCCCESS</h3>
              <small>Last 24 Hours</small>
            </div>
            <h5>+39%</h5>
            <h3>3849</h3>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default index;