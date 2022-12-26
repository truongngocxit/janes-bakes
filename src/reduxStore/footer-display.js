import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
  name: "footer",
  initialState: {
    footerDisplay: false,
  },
  reducers: {
    onFooter(state) {
      state.footerDisplay = true;
    },
    offFooter(state) {
      state.footerDisplay = false;
    },
  },
});

export const footerActions = footerSlice.actions;
export default footerSlice.reducer;
