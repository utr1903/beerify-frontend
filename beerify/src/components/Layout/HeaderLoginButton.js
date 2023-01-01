import { useNavigate } from "react-router-dom";

import classes from "./HeaderLoginButton.module.css";

const HeaderLoginButton = (props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <button className={classes["button"]} onClick={onClick}>
      <span>Login</span>
    </button>
  );
};

export default HeaderLoginButton;
