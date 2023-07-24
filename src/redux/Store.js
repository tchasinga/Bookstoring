import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Bookslice';
import categoryReducer from './Categoryslice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
