import React from 'react';
import BitcoinIcon from '../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../assets/vendor-blockchain.svg';
import EvilIcon from '../assets/vendor-evil.svg';
import NinjaIcon from '../assets/vendor-ninja.svg';
// ... Import other assets as needed

const Card = ({ cardData }) => {
  // Function to get the corresponding SVG based on the vendor
  const getVendorIcon = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return <img src={BitcoinIcon} alt="Bitcoin Inc" />;
      case 'blockchain-inc':
        return <img src={BlockchainIcon} alt="Blockchain Inc" />;
      case 'evil-corp':
        return <img src={EvilIcon} alt="Evil Corp" />;
      case 'ninja-bank':
        return <img src={NinjaIcon} alt="Ninja Bank" />;
      default:
        return null; // Return null or a default icon if the vendor doesn't match
    }
  };

  return (
    <div className="card">
      {cardData.vendor && getVendorIcon(cardData.vendor)} {/* Conditionally render the vendor icon */}
      <div className="card-body">
        <div className="card-number">
          {cardData.number}
        </div>
        <div className="card-holder">
          {cardData.holder}
        </div>
        <div className="card-expiry">
          {cardData.expiry}
        </div>
      </div>
    </div>
  );
};

export default Card;
