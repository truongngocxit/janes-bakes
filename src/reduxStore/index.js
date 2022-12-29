import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "./footer-display";
import navStyleReducer from "./nav-style";
import cartReducer from "./cart";

const reduxStore = configureStore({
  reducer: {
    footerDisplay: footerReducer,
    topNavHasBackground: navStyleReducer,
    cart: cartReducer,
  },
});

export default reduxStore;
