

import { BlogApi } from './service/BlogService';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
   
    [BlogApi.reducerPath]: BlogApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(

      BlogApi.middleware,
  
    ),
});

export type AppStore = typeof store;export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
