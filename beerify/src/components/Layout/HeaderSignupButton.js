import { useNavigate } from "react-router-dom";

import classes from "./HeaderSignupButton.module.css";

const HeaderSignupButton = (props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/signup");
  };

  return (
    <button className={classes["button"]} onClick={onClick}>
      <span>Signup</span>
    </button>
  );
};

export default HeaderSignupButton;
