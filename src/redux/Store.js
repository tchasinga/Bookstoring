import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../Components/Bookslice';
import categoryReducer from '../Components/Categoryslice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
