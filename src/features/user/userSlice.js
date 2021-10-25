import { createSlice } from "@reduxjs/toolkit";

import { getToken } from "../../utils/auth";

const initialState = {
  isLogged: getToken(),
  userData: { _id: "", first_name: "", last_name: "", email: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged: (state) => {
      return { ...state, isLogged: getToken() };
    },
    setUserData: (state, action) => {
      return {
        ...state,
        userData: {
          _id: action.payload._id,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email,
        },
      };
    },
  },
});

export const { setLogged, setUserData } = userSlice.actions;

export const selectUserLogged = (state) => state.user.isLogged;
export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
