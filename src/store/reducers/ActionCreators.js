import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_NEWS } from '../../constants/internalLinks'

export const fetchNews = createAsyncThunk(
  'data/fetchData',
  async (thunkAPI) => {
    try {
      const response = await axios.get(API_NEWS)
      return response.data
    } catch (e) {
      let message = 'Error'
      if (e instanceof Error) {
        message = e.message
      }
      return thunkAPI.rejectWithValue(message)
    }
  }
)