import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "./footer-display";
import navStyleReducer from "./nav-style";

const reduxStore = configureStore({
  reducer: {
    footerDisplay: footerReducer,
    topNavHasBackground: navStyleReducer,
  },
});

export default reduxStore;
