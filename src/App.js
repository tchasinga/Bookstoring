import Book from 'Components/Book';
import Categories from 'Components/Categories';
import Navbar from 'Components/Navigation';
import { Routes, Route, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Book />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
