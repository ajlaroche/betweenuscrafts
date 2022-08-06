import logoImage from "../../public/Images/sample4.jpg";
import classes from "./main-header.module.css";

function MainHeader(params) {
  return (
    <div
      className={`${classes.jumbotronFluid} ${classes.jumbotron} container-fluid row`}
    >
      <div className={`col-2 ${classes.logoBox}`}>
        <img
          className={classes.logoPic}
          src="https://storage.googleapis.com/between-us-crafts-gallery/public/sample4.jpg"
          alt="bicycle sign"
        />
      </div>
      <div className="col-10">
        <h1 className={classes.logo}>Between Us Crafts</h1>
        <p className={classes.lead}>Personalized Crafts for Every Occasion!</p>
      </div>
    </div>
  );
}

export default MainHeader;
