import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./Slices/DashboardSlice";
import isLoginReducer from "./Slices/LoginSlice"

export const store = configureStore({
  reducer: {
    BlogItem: DashboardReducer,
    isLogin: isLoginReducer
  }
})