import classes from "./Events.module.css";

import Event from "./Event";

const DUMMY_EVENTS = {
  Football: [
    {
      id: "event-football-1",
      name: "Besiktas - Sivas",
      place: "Inönü",
      startTime: new Date().toUTCString(),
    },
    {
      id: "event-football-2",
      name: "Barca - Madrid",
      place: "Nou Camp",
      startTime: new Date().toUTCString(),
    },
  ],
  Concert: [
    {
      id: "event-concert-1",
      name: "Iron Maiden",
      place: "Olympiapark",
      startTime: new Date().toUTCString(),
    },
  ],
};

const Events = (props) => {
  let eventsMap = [];
  for (const [eventType, eventInfos] of Object.entries(DUMMY_EVENTS)) {
    let eventsList = [];
    for (const eventInfo of eventInfos) {
      eventsList.push(
        <Event
          key={eventInfo.id}
          id={eventInfo.id}
          name={eventInfo.name}
          place={eventInfo.place}
          startTime={eventInfo.startTime}
        />
      );
    }

    eventsMap.push(
      <div className={classes["events"]} key={eventType}>
        <h2>{eventType}</h2>
        <ul>{eventsList}</ul>
      </div>
    );
  }

  return <div className={classes["main"]}>{eventsMap}</div>;
};

export default Events;
