import { createSlice } from "@reduxjs/toolkit";


// step 1- create initial state
const initialState = {
  items: [], // each item: {id, name, price, image, quantity}
  totalQuantity: 0,
  // totalAmount: 0,
};

// step 2- create a slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity += 1;
      // state.totalAmount += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      state.totalQuantity -= 1;
      // state.totalAmount -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      // state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


// step 4- go to main.jsx ->  add provider, store