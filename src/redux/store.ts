import { configureStore } from '@reduxjs/toolkit';
import textReducer from './slices/textSlice';
import VMenus1PagePartStatusReducer from './slices/VMenus1PagePartStatusSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      text: textReducer,
      VMenus1PagePartStatus: VMenus1PagePartStatusReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
