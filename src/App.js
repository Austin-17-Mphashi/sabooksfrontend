import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library'
import About from './pages/About'
import Navigation from './pages/Navigation';
import Navbar from './pages/Navigation';
import Book from './pages/Book';
import BookProvider from './pages/Context/BooksProvider';

function App() {
  return (
    <div>
      <Router>
        <BookProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/library' element={<Library />} />
          <Route path='/library/:book' element={<Book/>} />
        </Routes>
        </BookProvider>
      </Router>
    </div>
  );
}

export default App;
