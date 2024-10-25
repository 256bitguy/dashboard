import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Preparation";
import appliedReducer from "./slices/Applied";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    company: appliedReducer,
  },
});
