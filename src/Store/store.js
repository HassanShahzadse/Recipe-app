import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./Reducers/bookmarkReducer";
import userReducer from "./Reducers/userReducer";

export const store = configureStore({
  bookmark: bookmarkReducer,
  user: userReducer,
});