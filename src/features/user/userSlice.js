import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getToken } from "../../utils/auth";
import { getUser } from "../../utils/api";

export const fetchUser = createAsyncThunk(
  "user/setUserData",
  async (id) =>
    await getUser(id)
      .then((resp) => resp.data)
      .catch((err) => err)
);

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
  },
  extraReducers: {
    [fetchUser.fulfilled.type]: (state, action) => {
      return {
        ...state,
        userData: {
          _id: action.payload._id,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email,
          tasks: action.payload.tasks,
        },
      };
    },
  },
});

export const { setLogged } = userSlice.actions;

export const selectUserLogged = (state) => state.user.isLogged;
export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
