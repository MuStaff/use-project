import {combineReducers} from "@reduxjs/toolkit";

// Reducers
import {postsSlice} from "./reducers/postReducer";

export const rootReducer = combineReducers({posts: postsSlice});
