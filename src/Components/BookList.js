import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import BookForm from './BookForm';

const BookList = ({ books, onDelete }) => {
  const [bookList, setBookList] = useState(books);

  const handleAddBook = (newBook) => {
    // Add the new book to the state
    setBookList([...bookList, newBook]);
  };

  return (
    <div>
      {bookList.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={() => onDelete(book.id)}
        />
      ))}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

// Prop-type validation for BookList component
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
