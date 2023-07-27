import { NavLink } from 'react-router-dom';
// import { FaUserAlt } from 'react-icons/fa';
import styles from 'styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.container}>
    <div className={styles.display}>
      <h1 className={styles.color}>Bookstore manager</h1>
      <ul>
        <li>
          <NavLink to="/" className={styles.bookLink}>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="categories" className={styles.categoryLink}>
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
    <div className={styles.icon}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>
    </div>
  </div>
);

export default Navbar;
