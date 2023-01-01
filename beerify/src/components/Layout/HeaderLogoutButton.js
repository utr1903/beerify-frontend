import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authActions } from "../../store/auth";
import classes from "./HeaderLoginButton.module.css";

const HeaderLogoutButton = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <button className={classes["button"]} onClick={onClick}>
      <span>Logout</span>
    </button>
  );
};

export default HeaderLogoutButton;
