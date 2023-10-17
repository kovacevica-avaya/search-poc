import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
  searchResults: [],
};

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload.trim();
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchInput, setSearchResults } = slice.actions;
export default slice.reducer;
