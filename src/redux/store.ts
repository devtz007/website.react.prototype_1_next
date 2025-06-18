import { configureStore } from '@reduxjs/toolkit';
import textReducer from './slices/textSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      text: textReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
