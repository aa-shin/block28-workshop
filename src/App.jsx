import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import "./App.css";

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/home"><h1>Home</h1></Link>
        <Link to="/blue"><h1>Blue</h1></Link>
        <Link to="/red"><h1>Red</h1></Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
