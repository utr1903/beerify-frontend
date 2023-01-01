import { Fragment } from "react";
import { useSelector } from "react-redux";

import HeaderSignupButton from "./HeaderSignupButton";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderLogoutButton from "./HeaderLogoutButton";

import classes from "./Header.module.css";

const Header = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <header className={classes["header"]}>
        <h1>Beerify</h1>
        {!isLoggedIn && (
          <ul>
            <li>
              <HeaderSignupButton />
            </li>
            <li>
              <HeaderLoginButton />
            </li>
          </ul>
        )}
        {isLoggedIn && (
          <ul>
            <li>
              <HeaderLogoutButton />
            </li>
          </ul>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
