import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import calendarReducer from './slices/calendarSlice';
import animalMarksReducer from './slices/animalMarksSlice';
import culturesReducer from './slices/cultureSlice';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  animalMarks: animalMarksReducer,
  cultures: culturesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
