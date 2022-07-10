import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state: VisibilityFilters, action: PayloadAction<VisibilityFilters>) {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
