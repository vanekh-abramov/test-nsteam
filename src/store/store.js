import { combineReducers, configureStore } from '@reduxjs/toolkit'
import WordSlice from './reducers/WordSlice'

const rootReducer = combineReducers({
  data: WordSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}