import { createSlice } from "@reduxjs/toolkit";

// Example:
// item: {
//   item1: {
//     amount: 2
//     totalPrice: 10.00
//     unit: "€"
//   }
//   item1: {
//     amount: 5
//     totalPrice: 15.00
//     unit: "€"
//   }
// }
const initialCartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      if (action.payload.id in state.items) {
        state.items[action.payload.id].amount =
          state.items[action.payload.id].amount + action.payload.amount;
        state.items[action.payload.id].totalPrice =
          state.items[action.payload.id].totalPrice +
          action.payload.amount * action.payload.price;
      } else {
        state.items[action.payload.id] = {
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
