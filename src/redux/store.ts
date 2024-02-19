import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tripReducer from './trip/trip.slice'
import filterReducer from './filter/filter.slice'
import weatherReducer from './weather/weather.slice'
import userReducer from './user/user.slice'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter', 'weather'],
};


const reducers = combineReducers({
  trips: tripReducer,
  filter: filterReducer,
  weather: weatherReducer,
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)