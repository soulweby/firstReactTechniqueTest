
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Discover from './components/Discover';
import Watchlist from "./components/Watchlist"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Discover/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
    </Routes>
    
   
    </div>
  );
}

export default App;
