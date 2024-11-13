import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Slices/AppSlice";
import UserSlice from "./Slices/UserSlice";

const store = configureStore({
  reducer: {
    appSlice: AppSlice.reducer,
    userSlice: UserSlice.reducer,
  },
});

export default store;
