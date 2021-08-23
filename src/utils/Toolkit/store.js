import { configureStore } from "@reduxjs/toolkit";
import authorizationSlice from "./reducers/authorizationReducer";
import postsSlice from "./reducers/postReducer";

export const store = configureStore({
  reducer: {
    auth: authorizationSlice,
    post: postsSlice,
  },
});
