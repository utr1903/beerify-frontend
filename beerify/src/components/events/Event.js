import classes from "./Event.module.css";

import { Link } from "react-router-dom";

const Event = (props) => {
  return (
    <li className={classes["event"]} key={props.id}>
      <Link to={`/events/${props.id}`}>
        <div>
          <p className={classes["event_name"]}>{props.name}</p>
          <p className={classes["event_place"]}>{props.place}</p>
          <p className={classes["event_time"]}>{props.startTime}</p>
        </div>
      </Link>
    </li>
  );
};

export default Event;
