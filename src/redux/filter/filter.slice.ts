import { createSlice } from "@reduxjs/toolkit";

let initialState: string = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      return state = payload;
    }
  },
  selectors: {
    getFilter: state => state,
  }
})
export const { changeFilter } = filterSlice.actions
export const { getFilter } = filterSlice.selectors
export default filterSlice.reducer