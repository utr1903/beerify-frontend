import classes from "./EventButton.module.css";

import { useNavigate } from "react-router-dom";

const EventButton = (props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/events");
  };

  return (
    <button className={classes["button"]} onClick={onClick}>
      <span>See Events!</span>
    </button>
  );
};

export default EventButton;
