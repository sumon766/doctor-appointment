/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const getUser = () => {
  const existingUser = localStorage?.getItem("curr_user");
  if (existingUser) {
    return JSON.parse(existingUser);
  }
  return null;
};

const initialState = {
  user: getUser(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
