import styles from './Navbar.module.css'

import notification from '../images/menu-notification.svg'
import caret from '../images/caret-down.svg'
import data from "../data/data.json"

function Navbar() {
  return <div className={styles.navbar}>
    <div className={styles.navbarLeft}>
      <h2 className={styles.navbarHome}>NARWHAL</h2>
      <h2>Teams</h2>
    </div>
    <div className={styles.navbarRight}>
      <img src={notification} alt="logo" />
      <p>Hello, {data.current_user.name}</p>
      <img className={styles.avatar}
        src={data.current_user.avatar}
        alt={data.current_user.name}
      />
      <img src={caret} alt="caret" />
    </div>
  </div>
}

export default Navbar;