// store.ts

import { configureStore } from '@reduxjs/toolkit';
import Demo1Slice from './slices/demo_1-Slice';

// Function to create and configure the Redux store
export const makeStore = () => {
  return configureStore({
    reducer: {
      // Register the Demo1Slice reducer under the 'text' key
      text: Demo1Slice,
    },
  });
};

// Define types for the Redux store, root state, and dispatch
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
