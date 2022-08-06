import Sample from "./sample";
import classes from "./favoritesList.module.css";

function FavoritesList(props) {
  return (
    <ul className={classes.list}>
      {props.samples.map((sample) => (
        <Sample
          key={sample.id}
          id={sample.id}
          image={sample.image}
          title={sample.title}
          description={sample.description}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
