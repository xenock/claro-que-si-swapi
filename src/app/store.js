import { configureStore } from '@reduxjs/toolkit'
import starshipsReducer from './slices/starshipsSlice'

export default configureStore({
  reducer: {
    starships: starshipsReducer
  }
})
