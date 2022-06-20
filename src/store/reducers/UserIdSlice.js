import { fetchUserId } from './ActionCreators'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  status: false,
  error: ''
}

export const UserIdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserId.pending.type]: (state) => {
      state.status = true
      state.error = ''
    },
    [fetchUserId.fulfilled.type]: (state, action) => {
      state.status = false
      state.data = action.payload
      state.error = ''
    },
    [fetchUserId.rejected.type]: (state, action) => {
      state.status = false
      state.error = action.payload
    }
  }
})

export default UserIdSlice.reducer