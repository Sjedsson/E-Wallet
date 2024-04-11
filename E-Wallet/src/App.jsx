import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import AddCard from './Views/AddCard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addcard" element={<AddCard />} />
          {/* Add additional routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
