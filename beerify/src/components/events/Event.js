import classes from "./Event.module.css";

const Event = (props) => {
  return (
    <li className={classes["event"]} key={props.id}>
      <div>
        <p className={classes["name"]}>{props.name}</p>
        <p className={classes["place"]}>{props.place}</p>
        <p className={classes["time"]}>{props.startTime}</p>
      </div>
    </li>
  );
};

export default Event;
