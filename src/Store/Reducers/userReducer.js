import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "User",
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.userInfo;
      state.isLoggedIn = true;
    },

    logoutUser(state, action) {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const UserActions = userSlice.actions;

export default userSlice.reducer;
