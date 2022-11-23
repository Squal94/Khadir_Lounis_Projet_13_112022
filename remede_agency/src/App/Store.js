import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/post.slice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
