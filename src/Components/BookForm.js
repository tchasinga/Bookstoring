import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({
      item_id: `item${Date.now()}`, // Use a timestamp for a unique item_id
      title,
      author,
      category: 'Fiction', // You can customize the category or add a category input in the form
    });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

// Prop-type validation for BookForm component
BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
