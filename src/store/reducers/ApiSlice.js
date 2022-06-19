import { fetchDictionary } from './ActionCreators'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  status: false,
  error: ''
}

export const WordSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDictionary.pending.type]: (state) => {
      state.status = true
      state.error = ''
    },
    [fetchDictionary.fulfilled.type]: (state, action) => {
      state.status = false
      state.data = action.payload
      state.error = ''
    },
    [fetchDictionary.rejected.type]: (state, action) => {
      state.status = false
      state.error = action.payload
    }
  }
})

export default WordSlice.reducer