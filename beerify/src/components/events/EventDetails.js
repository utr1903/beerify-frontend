import classes from "./EventDetails.module.css";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart";
import EventItemForm from "./EventItemForm";

const DUMMY_EVENTS = {
  "event-football-1": {
    name: "Besiktas - Sivas",
    place: "Inönü",
    startTime: new Date().toUTCString(),
    items: {
      "item-1": {
        name: "Augustiner",
        price: 2.0,
        unit: "€",
      },
      "item-2": {
        name: "Hotdog",
        price: 3.0,
        unit: "€",
      },
    },
  },
  "event-football-2": {
    name: "Barca - Madrid",
    place: "Nou Camp",
    startTime: new Date().toUTCString(),
    items: {
      "item-2": {
        name: "Hotdog",
        price: 3.0,
        unit: "€",
      },
      "item-3": {
        name: "Fries",
        price: 2.0,
        unit: "€",
      },
    },
  },
  "event-concert-1": {
    name: "Iron Maiden",
    place: "Olympiapark",
    startTime: new Date().toUTCString(),
    items: {
      "item-1": {
        name: "Augustiner",
        price: 2.0,
        unit: "€",
      },
      "item-4": {
        name: "Coke",
        price: 1.5,
        unit: "€",
      },
    },
  },
};

const EventDetails = (props) => {
  const dispatch = useDispatch();

  const params = useParams();

  const addItemToCart = (item) => {
    dispatch(
      cartActions.addItem({
        id: item.itemId,
        amount: item.amount,
        price: DUMMY_EVENTS[item.eventId].items[item.itemId].price,
      })
    );
  };

  const eventDetails = DUMMY_EVENTS[params.eventId];

  let eventItems = [];
  for (const [itemId, itemInfo] of Object.entries(eventDetails.items)) {
    eventItems.push(
      <li className={classes["event_items_li"]} key={itemId}>
        <div className={classes["event_items_img"]}>IMAGE</div>
        <div className={classes["event_items_details"]}>
          <div>{itemInfo.name}</div>
          <div>
            {itemInfo.unit}
            {itemInfo.price}
          </div>
        </div>
        <div className={classes["event_items_amount"]}>
          <EventItemForm
            itemId={itemId}
            eventId={params.eventId}
            addItemToCart={addItemToCart}
          />
        </div>
      </li>
    );
  }

  return (
    <div className={classes["event_details"]}>
      <p className={classes["event_name"]}>{eventDetails.name}</p>
      <p className={classes["event_place"]}>{eventDetails.place}</p>
      <p className={classes["event_time"]}>{eventDetails.startTime}</p>
      <div>
        <ul className={classes["event_items_ul"]}>{eventItems}</ul>
      </div>
    </div>
  );
};

export default EventDetails;
