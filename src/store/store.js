import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice';
import watchListSlice from './watchListSlice';

const store = configureStore({
  reducer: {
    home: homeSlice,
    watchList: watchListSlice
  },
})

export default store;