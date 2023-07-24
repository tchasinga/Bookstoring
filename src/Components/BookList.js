import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { addBook, removeBook } from '../Redux/Bookslice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    // Dispatch the removeBook action to remove the book with the given id
    dispatch(removeBook(id));
  };

  const handleAddBook = (newBook) => {
    // Dispatch the addBook action to add the new book
    dispatch(addBook(newBook));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={() => handleDeleteBook(book.id)}
        />
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default BookList;
