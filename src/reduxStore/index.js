import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "./footer-display";

const reduxStore = configureStore({
  reducer: {
    footerDisplay: footerReducer,
  },
});

export default reduxStore;
