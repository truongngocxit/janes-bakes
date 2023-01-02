import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "./footer-display";
import cartReducer from "./cart";

const reduxStore = configureStore({
  reducer: {
    footerDisplay: footerReducer,
    cart: cartReducer,
  },
});

export default reduxStore;
