import { combineSlices, configureStore } from '@reduxjs/toolkit';
import ingredientsSlice from './slices/ingredientsSlice';
import userSlice from './slices/userSlice';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import constructorSlice from './slices/constructorSlice';
import feedSlice from './slices/feedSlice';
import orderSlice from './slices/orderSlice';

const rootReducer = combineSlices({
  ingredientsSlice,
  userSlice,
  constructorSlice,
  feedSlice,
  orderSlice
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
