import classes from "./EventInfo.module.css";

import { useParams } from "react-router-dom";

const DUMMY_EVENTS = {
  "event-football-1": {
    name: "Besiktas - Sivas",
    place: "Inönü",
    startTime: new Date().toUTCString(),
    items: {
      "item-1": {
        name: "Augustiner",
        price: 2,
        unit: "€",
      },
      "item-2": {
        name: "Hotdog",
        price: 3,
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
        price: 3,
        unit: "€",
      },
      "item-3": {
        name: "Fries",
        price: 2,
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
        price: 2,
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

const EventInfo = (props) => {
  const params = useParams();
  const eventDetails = DUMMY_EVENTS[params.eventId];

  let eventItems = [];
  for (const [itemId, itemInfo] of Object.entries(eventDetails.items)) {
    eventItems.push(
      <li className={classes["event_items_li"]} key={itemId}>
        <div>
          <p>{itemInfo.name}</p>
          <p>
            {itemInfo.unit}
            {itemInfo.price}
          </p>
        </div>
      </li>
    );
  }

  return (
    <div className={classes["event_info"]}>
      <p className={classes["event_name"]}>{eventDetails.name}</p>
      <p className={classes["event_place"]}>{eventDetails.place}</p>
      <p className={classes["event_time"]}>{eventDetails.startTime}</p>
      <ul className={classes["event_items_ul"]}>{eventItems}</ul>
    </div>
  );
};

export default EventInfo;
