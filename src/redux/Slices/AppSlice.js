import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "appSlice",
  initialState: {
    userType: "",
    loginScreen: "signIn",
  },
  reducers: {
    updateUserType(state, action) {
      state.userType = action.payload;
    },
    updateLoginScreen(state, action) {
      state.loginScreen = action.payload;
    },
  },
});

export default AppSlice;
export const { updateUserType, updateLoginScreen } = AppSlice.actions;
