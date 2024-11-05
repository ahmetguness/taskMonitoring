import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "appSlice",
  initialState: {
    userType: "",
  },
  reducers: {
    updateUserType(state, action) {
      state.userType = action.payload;
    },
  },
});

export default AppSlice;
export const { updateUserType } = AppSlice.actions;
