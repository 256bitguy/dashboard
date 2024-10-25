import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.current = action.payload;
      console.log(state.current);
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
