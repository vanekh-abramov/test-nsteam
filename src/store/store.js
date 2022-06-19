import { combineReducers, configureStore } from '@reduxjs/toolkit'
import NewsSlice from './reducers/NewsSlice'

const rootReducer = combineReducers({
  data: NewsSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}