import { combineReducers, configureStore } from '@reduxjs/toolkit'
import LoginSlice from './reducers/LoginSlice'
import NewsSlice from './reducers/NewsSlice'
import UserIdSlice from './reducers/UserIdSlice'
import UserPostsSlice from './reducers/UserPostsSlice'
import UserSlice from './reducers/UserSlice'

const rootReducer = combineReducers({
  users: UserSlice,
  news: NewsSlice,
  userId: UserIdSlice,
  userPosts: UserPostsSlice,
  chekLogin: LoginSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}