import logo from '../images/sw-logo-white.svg'
import campaign from '../images/icon-campaign.svg'
import teams from '../images/icon-teams.svg'
import leads from '../images/icon-leads.svg'
import reports from '../images/icon-reports.svg'
import help from '../images/icon-help.svg'

import styles from './Sidenav.module.css'

function Sidenav() {
    return <div className={styles.sidenav}>
        <img src={logo} alt="logo" />
        <img src={campaign} alt="teams" />
        <img src={teams} alt="companies" />
        <img src={leads} alt="leads" />
        <img src={reports} alt="reports" />
        <img src={help} alt="help" />
    </div>
}

export default Sidenav;