import classes from "./EventItemForm.module.css";

import { useRef, useState } from "react";

const EventItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmountAsString = amountInputRef.current.value;
    const enteredAmount = +enteredAmountAsString;

    if (enteredAmountAsString.trim().length === 0 || enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }

    props.addItemToCart({
      itemId: props.itemId,
      eventId: props.eventId,
      amount: enteredAmount,
    });
  };

  return (
    <form className={classes["form"]} onSubmit={submitHandler}>
      <div className={classes["input"]}>
        <label htmlFor={props.itemId}>Amount</label>
        <input
          ref={amountInputRef}
          id={props.itemId}
          type="number"
          min="1"
          step="1"
          defaultValue="1"
        />
        <button>Add</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
      </div>
    </form>
  );
};

export default EventItemForm;
