import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';
import Navigation from './Components/Navigation';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    // Add more sample books or start with an empty array
  ]);

  const handleAddBook = (newBook) => {
    // Add the new book to the state
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    // Delete the book with the given id from the state
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={<BookList books={books} onDelete={handleDeleteBook} />}
          />
          <Route
            path="/create"
            element={<BookForm onAddBook={handleAddBook} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
