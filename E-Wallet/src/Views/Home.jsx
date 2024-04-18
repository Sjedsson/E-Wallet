// Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Top from '../Components/Top';
import CardStack from '../Components/CardStack';
import { Link } from 'react-router-dom';

const Home = () => {
  // No need to get cards and activeCardIndex here if CardStack accesses the Redux state directly
  return (
    <div className="home">
      <Top title="E-WALLET" /> {/* Set the title prop to "E-WALLET" */}
      <CardStack /> {/* Removed unnecessary props passed to CardStack */}
      <Link to="/addcard" className="add-card-link">Add a New Card</Link>
    </div>
  );
};

export default Home;
