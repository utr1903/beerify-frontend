import { useContext, useEffect, useState } from "react";

import classes from "./HeaderLoginButton.module.css";

const HeaderLogoutButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(true);

  const onClick = () => {
    console.log("Here");
  };

  return (
    <button className={classes["button"]} onClick={onClick}>
      <span>Logout</span>
    </button>
  );
};

export default HeaderLogoutButton;
