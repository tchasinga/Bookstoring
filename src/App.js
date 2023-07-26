import { Routes, Route, Outlet } from 'react-router-dom';
import Books from 'components/Books';
import Categories from 'components/Categories';
import Navbar from 'components/Navbar';

<<<<<<< Updated upstream
// here I've react-router-dom v6 fix
const App = () => (
  <Provider store={Store}>
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
=======
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
>>>>>>> Stashed changes
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
