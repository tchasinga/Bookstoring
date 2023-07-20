import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './Components/BookList';
import Navigation from './Components/Navigation';
import Categories from './Components/categories';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    // Add more sample books or start with an empty array
  ]);

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
            exact
            element={<BookList books={books} onDelete={handleDeleteBook} />}
          />
          <Route
            path="/Categories"
            exact
            element={<Categories />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
