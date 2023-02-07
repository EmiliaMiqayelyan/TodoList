import { configureStore } from '@reduxjs/toolkit'
import todoslice from './todoslice'

const store = configureStore({
  reducer: {
    todos: todoslice,
  },
})

export default store;