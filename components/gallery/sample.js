import classes from "./sample.module.css";

function Sample(props) {
  return (
    <li className={classes.item}>
      <div className="card text-center">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </li>
  );
}

export default Sample;
