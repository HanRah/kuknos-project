import { configureStore } from '@reduxjs/toolkit';

import selectedReducer from './selected';

export const store = configureStore({
  reducer: {
    selected: selectedReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch