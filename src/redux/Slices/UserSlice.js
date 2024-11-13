const { createSlice } = require("@reduxjs/toolkit");

const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    userInfo: {},
  },
  reducers: {
    updateUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export default UserSlice;
export const { updateUserInfo } = UserSlice.actions;
