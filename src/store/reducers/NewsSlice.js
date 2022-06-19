import { fetchNews } from './ActionCreators'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  status: false,
  error: ''
}

export const WordSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNews.pending.type]: (state) => {
      state.status = true
      state.error = ''
    },
    [fetchNews.fulfilled.type]: (state, action) => {
      state.status = false
      state.data = action.payload
      state.error = ''
    },
    [fetchNews.rejected.type]: (state, action) => {
      state.status = false
      state.error = action.payload
    }
  }
})

export default WordSlice.reducer