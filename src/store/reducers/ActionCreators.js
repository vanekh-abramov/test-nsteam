import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from '../../constants/internalLinks'

export const fetchDictionary = createAsyncThunk(
  'data/fetchData',
  async (thunkAPI) => {
    try {
      const response = await axios.get(API)
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