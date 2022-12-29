import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      state.totalQuantity++;
      const addedItem = action.payload;
      const itemHasExisted = state.items.some(
        (item) => item.name === addedItem.name
      );

      if (!itemHasExisted) {
        state.items.push({ ...addedItem, quantity: 1 });
        state.totalPrice += addedItem.price;
      } else {
        const indexItemToAdd = state.items.findIndex(
          (item) => item.name === addedItem.name
        );
        state.items[indexItemToAdd].quantity++;
        state.totalPrice += addedItem.price;
      }
    },
    removeItem(state, action) {
      state.totalQuantity--;
      const indexItemToRemove = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const itemToRemove = state.items[indexItemToRemove];
      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    deleteItem(state, action) {
      const idItemToDelete = String(action.payload);
      const itemToDelete = state.items.find(
        (item) => item.id === idItemToDelete
      );

      state.totalPrice -= itemToDelete.quantity * itemToDelete.price;
      state.totalQuantity -= itemToDelete.quantity;
      state.items = state.items.filter((item) => item.id !== idItemToDelete);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
