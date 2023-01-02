import classes from "./Cart.module.css";

import { useSelector } from "react-redux";

// const EVENT_ID = "Iron Maiden";

// const DUMMY_ITEMS = {
//   item1: {
//     name: "Beer",
//     amount: 2,
//     totalPrice: 10.0,
//     unit: "€",
//   },
//   item2: {
//     name: "Coke",
//     amount: 5,
//     totalPrice: 15.0,
//     unit: "€",
//   },
// };

const Cart = (props) => {
  const eventId = useSelector((state) => state.cart.eventId);
  const items = useSelector((state) => state.cart.items);

  let totalAmount = 0;
  let itemsList = [];
  for (const [itemId, itemInfo] of Object.entries(items)) {
    totalAmount = totalAmount + itemInfo.totalPrice;
    itemsList.push(
      <li className={classes["cart_items_li"]} key={itemId}>
        <div className={classes["cart_items_img"]}>IMAGE</div>
        <div className={classes["cart_items_details"]}>
          <div>{itemInfo.name}</div>
          <div>
            {itemInfo.unit}
            {itemInfo.totalPrice}
          </div>
        </div>
        <div className={classes["cart_items_amount"]}>
          Test
          {/* <EventItemForm
            itemId={itemId}
            eventId={params.eventId}
            addItemToCart={addItemToCart}
          /> */}
        </div>
      </li>
    );
  }

  return (
    <div className={classes["cart_details"]}>
      <p className={classes["cart_name"]}>{eventId}</p>
      <div>
        <ul className={classes["cart_items_ul"]}>{itemsList}</ul>
      </div>
      <div>Total amount: {totalAmount}</div>
    </div>
  );
};

export default Cart;
