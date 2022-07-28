import { useState } from 'react';

import styles from "./Teams.module.css";

import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Content from "../components/Content";
import ActivityFeed from "../components/ActivityFeed";

// Page for teams
function Teams() {
  // State of the display for header, shared between two components
  const [headerDisplay, setHeaderDisplay] = useState(1);

  return (
    <div className={styles.bg}>
      <Sidenav />
      <div className={styles.main}>
        <Navbar />
        <Header headerDisplay={headerDisplay} setHeaderDisplay={setHeaderDisplay}/>
        <div className={styles.feed}>
          <Content headerDisplay={headerDisplay} className={styles.content} />
          <div className={styles.activity}>
            <ActivityFeed></ActivityFeed>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
