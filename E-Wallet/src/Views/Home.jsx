// Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Top from '../Components/Top';
import CardStack from '../Components/CardStack';
import { Link } from 'react-router-dom';
import BitcoinIcon from '../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../assets/vendor-blockchain.svg';
import EvilIcon from '../assets/vendor-evil.svg';
import NinjaIcon from '../assets/vendor-ninja.svg';

const Home = () => {
  const cards = useSelector((state) => state.card.cards);
  const activeCardIndex = useSelector((state) => state.card.activeCardIndex);

  const getVendorIconPath = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return BitcoinIcon;
      case 'ninja-bank':
        return NinjaIcon;
      case 'block-chain-inc':
        return BlockchainIcon;
      case 'evil-corp':
        return EvilIcon;
      default:
        return ''; // Return an empty string or path to a default icon if you have one
    }
  };

  return (
    <div className="home">
      <Top />
      <CardStack cards={cards} activeCardIndex={activeCardIndex} getVendorIconPath={getVendorIconPath} />
      <Link to="/addcard" className="add-card-link">Add a New Card</Link>
    </div>
  );
};

export default Home;
