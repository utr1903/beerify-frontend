import { useNavigate } from "react-router-dom";

import classes from "./EventButton.module.css";

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
