import { createSlice } from "@reduxjs/toolkit";

// The state that we use inside redux as a store can only be modified with the help of the actions. But, this state must be specified somewhere first to use it.

const initialState = () => ({
  email: "",
  firstName: "",
  lastName: "",
  auth: {
    Logged: false,
    Token: "",
  },
});

// Reducers An action is a useful package of information that contains a type like login logout or infoUser. The actions are distributed from the components. It sends the data of your React component to your Redux store.

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
