import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Book = ({ title, author, onDelete }) => (
  <div>
    <h3>{title}</h3>
    <p>
      Author:
      {' '}
      {author}
    </p>
    <Button onClick={onDelete}>Delete</Button>
  </div>
);

// Prop-type validation for Book component
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
