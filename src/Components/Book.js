import { useDispatch, useSelector } from 'react-redux';
import BookState from 'Components/BookState';
import AddBook from 'Components/BookAdd';
import { fetchBooks } from 'redux/books/booksSlice';
import '../styles/BookDetails.module.css';
import '../styles/AddBook.module.css';
import { useEffect } from 'react';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((item) => (
        <BookState
          key={item.item_id}
          title={item.title}
          category={item.category}
          author={item.author}
          id={item.item_id}
        />
      ))}
      <AddBook />
    </div>
  );
};
export default Books;
