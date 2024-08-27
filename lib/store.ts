
import userReducer from './features/userSlice/userSlice';

import { BlogApi } from './service/BlogService';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,  
   
    [BlogApi.reducerPath]: BlogApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(

      BlogApi.middleware,
  
    ),
});

export type AppStore = typeof store;export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
