import { Fragment } from "react";
import { useSelector } from "react-redux";

import HeaderSignupButton from "./HeaderSignupButton";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderLogoutButton from "./HeaderLogoutButton";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";
import HomeButton from "./HomeButton";

const Header = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <header className={classes["header"]}>
        <HomeButton />
        {!isLoggedIn && (
          <ul>
            <li>
              <HeaderSignupButton />
            </li>
            <li>
              <HeaderLoginButton />
            </li>
            <li>
              <HeaderCartButton />
            </li>
          </ul>
        )}
        {isLoggedIn && (
          <ul>
            <li>
              <HeaderLogoutButton />
            </li>
            <li>
              <HeaderCartButton />
            </li>
          </ul>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
