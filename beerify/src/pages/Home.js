import { Fragment } from "react";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Fragment>
      <h1 className={classes["home"]}>Welcome to Beerify!</h1>
    </Fragment>
  );
};

export default Home;
