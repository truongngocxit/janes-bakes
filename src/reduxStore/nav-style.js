import { createSlice } from "@reduxjs/toolkit";

const navStyle = createSlice({
  name: "navStyle",
  initialState: {
    hasBackground: false,
  },
  reducers: {
    backgroundOn(state) {
      state.backgroundOn = true;
    },
    backgroundOff(state) {
      state.backgroundOn = false;
    },
  },
});

export const navStyleActions = navStyle.actions;
export default navStyle.reducer;
