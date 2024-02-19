// userSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  displayName: string | null;
}

const initialState: UserState = {
  displayName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDisplayName(state, action: PayloadAction<string | null>) {
      state.displayName = action.payload;
    },
  },
  selectors: {
    displayName: (state) => state.displayName
  }
});

export const { displayName } = userSlice.selectors
export const { setUserDisplayName } = userSlice.actions;

export default userSlice.reducer;
