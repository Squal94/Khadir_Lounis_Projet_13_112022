import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../features/post.slice";

export default configureStore({
  reducer: {
    user: Reducer,
  },
});
