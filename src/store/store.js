import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice';
import watchListSlice from './watchListSlice';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
    home: homeSlice,
    watchList: watchListSlice
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
})

export default store;