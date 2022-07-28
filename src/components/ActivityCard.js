import styles from "./ActivityCard.module.css";

const ActivityCard = (props) => {
  const { person, target, time, action } = props;

  return (
    <div className={styles.activityCard}>
      <img src={person.avatar} alt={person.name} />
      <div className={styles.activityInfo}>
        {/* Render card information based on the action */}
        { action == "increased_quota" ? <p><strong>{person.name}</strong> increased <strong>{target}</strong>'s quota.</p> : null }
        { action == "added_leads" ? <p><strong>{person.name}</strong> added new leads to <strong>{target}</strong>.</p> : null }
        { action == "archived_team" ? <p><strong>{person.name}</strong> archived the team <strong>{target}</strong>.</p> : null }
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
