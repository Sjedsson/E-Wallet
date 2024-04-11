import React from 'react';
import { useSelector } from 'react-redux';
import Top from '../Components/Top';
import CardStack from '../Components/CardStack';
import { Link } from 'react-router-dom';

const Home = () => {
  // Accessing state from Redux store
  const cards = useSelector((state) => state.card.cards);
  const activeCardIndex = useSelector((state) => state.card.activeCardIndex);

  return (
    <div className="home">
      <Top />
      {/* Assuming CardStack shows all cards and highlights the active one */}
      <CardStack cards={cards} activeCardIndex={activeCardIndex} />
      {/* Link to the AddCard view */}
      <Link to="/addcard">Add a New Card</Link>
    </div>
  );
};

export default Home;
