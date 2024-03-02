import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{
  email: localStorage.getItem('email') || null,
  },
  loggedIn: !!localStorage.getItem("auth"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.loggedIn = true;
      localStorage.setItem('email', action.payload);
    },
    logout: (state) => {
      state.email = null;
      state.loggedIn = false;
      localStorage.removeItem('email');
      localStorage.clear();
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
