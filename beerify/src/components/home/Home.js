import classes from "./Home.module.css";

import EventButton from "./EventButton";

const Home = (props) => {
  return (
    <div className={classes["home"]}>
      <h1>Welcome to Beerify!</h1>
      <p>Tired of waiting in the line just to get a fucking beer?</p>
      <p>We gotcha mate...</p>
      <EventButton />
    </div>
  );
};

export default Home;
