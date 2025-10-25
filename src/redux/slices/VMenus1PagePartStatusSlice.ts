import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VMenus1PagePartStatusState {
  isOpen: boolean;
}

const initialState: VMenus1PagePartStatusState = {
  isOpen: false,
};

const VMenus1PagePartStatusSlice = createSlice({
  name: 'VMenus1PagePartStatus',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { open, close, toggle, setIsOpen } =
  VMenus1PagePartStatusSlice.actions;
export default VMenus1PagePartStatusSlice.reducer;
