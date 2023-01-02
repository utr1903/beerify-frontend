import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const items = useSelector((state) => state.cart.items);

  let amount = 0;
  for (const itemId of Object.keys(items)) {
    amount = amount + items[itemId]["amount"];
  }

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/cart");
  };

  return (
    <button className={classes["button"]} onClick={onClick}>
      <span>{amount}</span>
    </button>
  );
};

export default HeaderCartButton;
