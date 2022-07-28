import { useRef } from "react";

import styles from "./Header.module.css";

import companies2 from "../images/icon-companies.svg";

function Header(props) {
  const allRef = useRef(null);
  const favRef = useRef(null);
  const arcRef = useRef(null);

  // Tried to refocus header links but couldnt get it to work
  function Focus() {
    if (props.headerDisplay === 1) {
      setTimeout(allRef.current.focus(), 1000);
    }
    if (props.headerDisplay === 2) {
      setTimeout(favRef.current.focus(), 1000);
    }
    if (props.headerDisplay === 3) {
      setTimeout(arcRef.current.focus(), 1000);
    }
  }

  // Functions that update header's state in the parent
  const handleAllClick = () => {
    props.setHeaderDisplay(1);
  }

  const handleFavClick = () => {
    props.setHeaderDisplay(2);
  }

  const handleArcClick = () => {
    props.setHeaderDisplay(3);
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <img src={companies2} alt="companies" />
        <h1>Teams</h1>
        <button type="button" className={styles.addIcon}>
          CREATE NEW TEAM
        </button>
      </div>
      <div className={styles.headerBottom}>
        <button autoFocus ref={allRef} type="button" onClick={handleAllClick} onBlur={Focus} className={styles.all} >All</button>
        <button ref={favRef} type="button" onClick={handleFavClick} onBlur={Focus} className={styles.favorites}>Favorites</button>
        <button ref={arcRef} type="button" onClick={handleArcClick} onBlur={Focus} className={styles.archived}>Archived</button>
        <input className={styles.searchIcon} type="text" placeholder=" Search team name ..."></input>
      </div>
    </div>
  );
}

export default Header;
