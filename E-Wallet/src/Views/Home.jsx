// Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Top from '../Components/Top';
import CardStack from '../Components/CardStack';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Top title="E-WALLET" />
      <CardStack />
      <Link to="/addcard" className="add-card-link">Add a New Card</Link>
    </div>
  );
};

export default Home;
