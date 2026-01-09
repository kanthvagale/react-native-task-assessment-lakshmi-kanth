import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchDataType = {
  searchStr: string;
};

const initialState: SearchDataType = {
  searchStr: '',
};

const searchSlice = createSlice({
  name: 'SearchData',
  initialState,
  reducers: {
    searchTxtChange: (state, action: PayloadAction<SearchDataType>) => {
      state.searchStr = action.payload.searchStr;
    },
  },
});

export const { searchTxtChange } = searchSlice.actions;
export default searchSlice.reducer;
