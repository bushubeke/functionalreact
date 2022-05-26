import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './appreducer'
export default configureStore({
  reducer: userReducer,
})