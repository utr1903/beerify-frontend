import { useNavigate } from "react-router-dom";

import classes from "./HomeButton.module.css";

const HomeButton = (props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <button className={classes["button"]} onClick={onClick}>
      <h1>Beerify</h1>
    </button>
  );
};

export default HomeButton;
