import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Storeng from './Redux/Store';
import BookList from './Components/BookList';
import Navigation from './Components/Navigation';
import Categories from './Components/categories';

// here I've react-router-dom v6
const App = () => (
  <Provider store={Storeng}>
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route exact path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
