import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";
import { authActions } from "../../store/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
    navigate("/");
  };

  return (
    <div className={classes["login"]}>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Auth;
