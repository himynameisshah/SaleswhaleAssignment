import styles from './ContentCard.module.css'

import campaign from '../images/icon-conversations-small.svg'
import lead from '../images/icon-leads-small.svg'
import starActive from "../images/star-active.svg";
import starDefault from "../images/star-default.svg";

const ContentCard = (props) => {
  const { image, company, date, description, campaignsCount, leadCount, favourited } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src={image} alt={company} />
        <div className={styles.cardTitle}>
          <h3>{company}</h3>
          <p>Created on {date}</p>
        </div>
        {favourited ? <img src={starActive} alt="active star" /> : <img src={starDefault} alt="inactive star" />}
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardLinks}>
        <img src={campaign} alt="campaign" />
        <p>{campaignsCount} Campaigns</p>
        <img src={lead} alt="leads" />
        <p>{leadCount} Leads</p>
      </div>
    </div>
  )
};

export default ContentCard;