import styles from "./ActivityFeed.module.css";
import data from "../data/data.json";

import ActivityCard from "./ActivityCard"

function ActivityFeed() {
  return (
    <div className={styles.activity}>
      <h2>Activity</h2>
      {data.activities.map((card) => {
        return (
          <ActivityCard
            key={card.id}
            person={card.person}
            action={card.action}
            target={card.target}
            time={card.created_at}
          ></ActivityCard>
        );
      })}
    </div>
  );
}

export default ActivityFeed;
