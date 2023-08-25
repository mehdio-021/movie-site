import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
