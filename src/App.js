
import './App.css';
import { BrowserRouter as Router ,  Route , Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About /> } />
        <Route path='/project' element = {<Project />} />
        <Route path='/contact' element = {<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
