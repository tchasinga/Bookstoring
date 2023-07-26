import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      const updatedState = {
        ...state,
        categories: action.payload === 'Under construction' ? 'Under Construction' : state.categories,
      };
      return updatedState;
    },
  },
});
export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
