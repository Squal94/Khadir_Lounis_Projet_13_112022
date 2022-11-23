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
    //users/loginUser
    loginUser: (state, action) => {
      state.auth.Logged = !state.auth.Logged;
      state.auth.Token = action.payload[0];
      state.email = action.payload[1];
    },
    logoutUser: (state) => {
      state = initialState();
      return state;
    },
  },
});

export const { loginUser, logoutUser } = usersSlice.actions;

export default usersSlice.reducer;
