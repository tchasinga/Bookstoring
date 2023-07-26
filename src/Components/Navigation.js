import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <div className="display">
      <h1 className="color">Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink to="/" className="bookLink">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="categories" className="categoryLink">
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="icon">
      <h4>Welcom now</h4>
    </div>
  </div>
);

export default Navbar;
