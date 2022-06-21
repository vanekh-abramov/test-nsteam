import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: false
}

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    authLogin: (state, action) => { state.userLogin = action.payload }
  },
})

export const { authLogin } = LoginSlice.actions

export default LoginSlice.reducer
