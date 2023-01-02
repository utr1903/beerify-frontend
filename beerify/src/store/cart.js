import { createSlice } from "@reduxjs/toolkit";

// Example:
// items: {
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
// }
const initialCartState = {
  eventId: "",
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      if (action.payload.id in state.items) {;
        state.items[action.payload.id].amount =
          state.items[action.payload.id].amount + action.payload.amount;
        state.items[action.payload.id].totalPrice =
          state.items[action.payload.id].totalPrice +
          action.payload.amount * action.payload.price;
      } else {
        state.eventId = action.payload.eventId;
        state.items[action.payload.id] = {
          name: action.payload.name,
          amount: action.payload.amount,
          totalPrice: action.payload.price,
          unit: action.payload.unit,
        };
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
