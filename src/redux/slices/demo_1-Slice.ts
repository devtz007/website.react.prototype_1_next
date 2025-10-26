import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for the text slice state
interface TextState {
  value: string;
}

// Define the initial state for the text slice
const initialState: TextState = {
  value: '',
};

// Create the text slice
const Demo1Slice = createSlice({
  name: 'Demo1Slice',
  initialState,
  reducers: {
    // Action to set the text value
    setText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Export the action creator
export const { setText } = Demo1Slice.actions;

// Export the reducer
export default Demo1Slice.reducer;
