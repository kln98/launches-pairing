import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import spaceReducer from './spaceX/spaceSlice';

export const store = configureStore({
  reducer: {
    space: spaceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
