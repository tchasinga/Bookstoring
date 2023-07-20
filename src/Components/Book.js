import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // Call your delete book API or perform any other delete action
    onDelete();
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>
        Author:
        {author}
      </p>
      {!isDeleting && <button type="button" onClick={handleDelete}>Delete</button>}
      {isDeleting && <p>Deleting...</p>}
    </div>
  );
};

// Prop-type validation for Book component
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
