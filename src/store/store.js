import { combineReducers, configureStore } from '@reduxjs/toolkit'
import NewsSlice from './reducers/NewsSlice'
import UserSlice from './reducers/UserSlice'

const rootReducer = combineReducers({
  users: UserSlice,
  news: NewsSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}