import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_POSTS, API_USERS, API_USER_ID, API_USER_POSTS } from '../../constants/internalLinks'

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (thunkAPI) => {
    try {
      const response = await axios.get(API_POSTS)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
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
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const fetchUserId = createAsyncThunk(
  'user/fetchUserId',
  async ( id, thunkAPI ) => {
    try {
      const response = await axios.get(API_USER_ID + id)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const fetchUserPosts = createAsyncThunk(
  'user/fetchUserPosts',
  async ( id, thunkAPI ) => {
    try {
      const response = await axios.get(API_USER_POSTS + id)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)
