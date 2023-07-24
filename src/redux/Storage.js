import { configureStore } from '@reduxjs/toolkit';
import Bookslice from './Bookslice';
import categoryReducer from './categories/Categoryslice';

const Store = configureStore({
  reducer: {
    books: Bookslice,
    categories: categoryReducer,
  },
});

export default Store;
