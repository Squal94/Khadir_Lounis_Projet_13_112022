import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({
  email: "",
  firstName: "",
  lastName: "",
  auth: {
    Logged: false,
    Token: "",
  },
});

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState(),
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.auth.Logged = !state.auth.Logged;
      state.auth.Token = action.payload[0];
      state.email = action.payload[1];
    },
    logout: (state) => {
      // state.auth.Logged = !state.auth.Logged;
      state = initialState();
      return state;
    },
    infoUser: (state, action) => {
      state.firstName = action.payload[0];
      state.lastName = action.payload[1];
    },
  },
});

export const { login, logout, infoUser } = usersSlice.actions;

export default usersSlice.reducer;
