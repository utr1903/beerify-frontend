import { useContext, useEffect, useState } from "react";

import classes from "./HeaderSignupButton.module.css";

const HeaderSignupButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(true);

  const onClick = () => {
    console.log("Here");
  };

  return (
    <button className={classes["button"]} onClick={onClick}>
      <span>Signup</span>
    </button>
  );
};

export default HeaderSignupButton;
