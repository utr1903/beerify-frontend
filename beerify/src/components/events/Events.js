import { Fragment } from "react";
import { useSelector } from "react-redux";

import classes from "./Events.module.css";

const DUMMY_EVENTS = [
  {
    id: "event-football-1",
    type: "football",
    name: "Bayern - Dortmund",
    place: "Allianz Arena",
  },
  {
    id: "event-football-2",
    type: "football",
    name: "Barca - Madrid",
    place: "Nou Camp",
  },
];

const Events = (props) => {
  const eventsList = DUMMY_EVENTS.map((e) => (
    <li key={e.id}>
      <div>
        <h4>{e.name}</h4>
      </div>
    </li>
  ));

  return (
    <div className={classes["events"]}>
      <h2>Events</h2>
      <h3>Football</h3>
      <ul>{eventsList}</ul>
    </div>
  );
};

export default Events;
