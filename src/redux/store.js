import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Slices/AppSlice";

const store = configureStore({
  reducer: {
    appSlice: AppSlice.reducer,
  },
});

export default store;
