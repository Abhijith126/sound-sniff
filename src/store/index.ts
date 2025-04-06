import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './slices/musicSlice';
import releaseInfoReducer from './slices/releaseInfoSlice';

export const store = configureStore({
  reducer: {
    music: musicReducer,
    releaseInfo: releaseInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
