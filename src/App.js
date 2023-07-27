import Book from 'Components/Book';
// the Categoris was in lowercase now I've put in Uppercase and the issue are fixed, it fixed yet...
import Categories from 'Components/Messages';
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
