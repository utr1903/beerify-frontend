import { useRef, useState } from "react";

import classes from "./EventItemForm.module.css";

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

    // props.onAddItemToCart(enteredAmount);
  };

  return (
    <form className={classes["form"]} onSubmit={submitHandler}>
      <div className={classes["input"]}>
        <label htmlFor={props.id}>Amount</label>
        <input
          ref={amountInputRef}
          id={props.id}
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
