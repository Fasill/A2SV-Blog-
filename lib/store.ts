
import userReducer from './features/userSlice/userSlice';

import { userApi } from './service/UserService';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,  
   
    [userApi.reducerPath]: userApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(

      userApi.middleware,
  
    ),
});

export type AppStore = typeof store;export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
