import styles from "./Content.module.css";
import ContentCard from "./ContentCard"
import data from "../data/data.json"


function Content(props) {

  // Render content card based on selection of all, favorite and archive
  // Only renders card if it matches with the selection
  function RenderCard(card) {
    if ((props.headerDisplay === 1) || (props.headerDisplay === 2 && card.is_favorited) || (props.headerDisplay === 3 && card.is_archived))
      return <ContentCard
        key={card.id}
        company={card.name}
        date={card.created_at}
        description={card.description}
        campaignsCount={card.campaigns_count}
        leadCount={card.leads_count}
        image={card.image}
        favourited={card.is_favorited}>
      </ContentCard>;
  }

  function RenderHeader() {
    if (props.headerDisplay === 1) 
      return <h2>All Teams</h2>;
    if (props.headerDisplay === 2) 
      return <h2>Favorite Teams</h2>;
    if (props.headerDisplay === 3) 
      return <h2>Archived Teams</h2>;
  }

  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        {RenderHeader()}
        <p>Showing 65 out of 65</p>
      </div>
      <div className={styles.contentCards}>
        {data.teams.map((card) => {
          return RenderCard(card);
        })}
      </div>
    </div>
  );
}

export default Content;
