import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_NEWS, API_USERS } from '../../constants/internalLinks'

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

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (thunkAPI) => {
    try {
      const response = await axios.get(API_USERS)
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