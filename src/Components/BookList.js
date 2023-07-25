import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { addBook, removeBook } from '../redux/Bookslice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          onDelete={() => handleDeleteBook(book.item_id)}
        />
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default BookList;
