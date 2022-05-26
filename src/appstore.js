import { configureStore } from '@reduxjs/toolkit'
import { employeeSlice, } from './appreducer'
export default configureStore({
  reducer:employeeSlice,
  
})