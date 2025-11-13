import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';  
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Games from './pages/Games.jsx';
import Reviews from './pages/Reviews.jsx';
import Stats from './pages/Stats.jsx';
import NotFound from './pages/NotFound.jsx';





function App() {
  return (
    <Router>
    <Navbar />
    <div className='content'>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/games' element={<Games />}/> 
        <Route path='/reviews' element={<Reviews />}/> 
        <Route path='/stats' element={<Stats />}/> 
        <Route path='*' element={<NotFound />}/> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;