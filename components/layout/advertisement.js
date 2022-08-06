import classes from "./advertisement.module.css";

function Advertisement() {
  return (
    <div className={`card ${classes.adCard}`}>
      <div className="card-body">
        <h2 className={classes.adText}>Please call 555-555-5555</h2>
      </div>
    </div>
  );
}

export default Advertisement;
