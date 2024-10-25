import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Preparation";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
