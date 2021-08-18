import {combineReducers} from "@reduxjs/toolkit";

// Reducers
import {postsSlice} from "./reducers/postReducer";
import {authorizationSlice} from "./reducers/authorizationReducer";

export const rootReducer = combineReducers({
    auth: authorizationSlice,
    post: postsSlice,
});
