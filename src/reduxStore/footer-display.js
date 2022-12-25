import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
  name: "footer",
  initialState: {
    footerDisplay: false,
  },
  reducers: {
    onFooter(state) {
      console.log("On");
      state.footerDisplay = true;
    },
    offFooter(state) {
      console.log("off");
      state.footerDisplay = false;
    },
  },
});

export const footerActions = footerSlice.actions;
export default footerSlice.reducer;
