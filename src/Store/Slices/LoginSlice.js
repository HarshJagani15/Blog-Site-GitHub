import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  state: false
}

export const LoginSlice = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.state = true
    },

    setLogOut: (state, action) => {
      state.state = false
    }
  }
})

export const loginAction = LoginSlice.actions

export default LoginSlice.reducer