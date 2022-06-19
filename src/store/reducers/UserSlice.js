import { fetchUsers } from './ActionCreators'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  status: false,
  error: ''
}

export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.status = true
      state.error = ''
    },
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.status = false
      state.data = action.payload
      state.error = ''
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state.status = false
      state.error = action.payload
    }
  }
})

export default UserSlice.reducer