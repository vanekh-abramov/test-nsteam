import { fetchUserPosts } from './ActionCreators'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  status: false,
  error: ''
}

export const UserPostsSlice = createSlice({
  name: 'userposts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserPosts.pending.type]: (state) => {
      state.status = true
      state.error = ''
    },
    [fetchUserPosts.fulfilled.type]: (state, action) => {
      state.status = false
      state.posts = action.payload
      state.error = ''
    },
    [fetchUserPosts.rejected.type]: (state, action) => {
      state.status = false
      state.error = action.payload
    }
  }
})

export default UserPostsSlice.reducer