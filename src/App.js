import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Library from './pages/Library'
import About from './pages/About'
import Navigation from './pages/Navigation';
import Book from './pages/Book';
function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/library' element={<Library />} />
          <Route path='/library/:book' element={<Book/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
