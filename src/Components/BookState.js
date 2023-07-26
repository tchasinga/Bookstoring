import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/books/booksSlice';

const BookState = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="details">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <ul>
          <li>
            <button className="line" type="button">Comments</button>
          </li>
          <li>
            <button className="line" type="button" onClick={() => dispatch(deleteBook(id))}>
              Remove
            </button>
          </li>
          <li>
            <button className="button" type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="progress">
        <div className="progressDiv">
          <div className="progressBar" />
          <div>
            <h2>80 %</h2>
            <p>completed</p>
          </div>
        </div>
        <div className="updateProgress">
          <h3>CURRENT CHAPTER</h3>
          <h3>Chapter 17</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
      {' '}
    </div>
  );
};

export default BookState;

BookState.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
