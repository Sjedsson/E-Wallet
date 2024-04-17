import React from 'react';
import BitcoinIcon from '../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../assets/vendor-blockchain.svg';
import EvilIcon from '../assets/vendor-evil.svg';
import NinjaIcon from '../assets/vendor-ninja.svg';
import ChipDark from '../assets/chip-dark.svg';
import ChipLight from '../assets/chip-light.svg';
import './card-styles.css'; // Import styles

// Helper function to get CSS class based on the vendor
const getVendorClass = (vendor) => {
  return `card card-preview color-${vendor.replace(/\s+/g, '-').toLowerCase()}`;
};

const Card = ({ cardData, onClick, isActive }) => {
  // Get the corresponding SVG based on the vendor
  const vendorIcon = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return BitcoinIcon;
      case 'blockchain-inc':
        return BlockchainIcon;
      case 'evil-corp':
        return EvilIcon;
      case 'ninja-bank':
        return NinjaIcon;
      default:
        return ''; // You can return a default icon path here if you have one
    }
  };

  // Get the chip image based on the vendor
  const vendorChip = (vendor) => {
    return vendor === 'bitcoin-inc' ? ChipDark : ChipLight;
  };

  // Construct the card's CSS class based on the vendor and active state
  const cardClass = `${getVendorClass(cardData.vendor)} ${isActive ? 'active' : ''}`;

  return (
    <div className={cardClass} onClick={() => onClick(cardData.id)}>
      <img className="card-chip" src={vendorChip(cardData.vendor)} alt="Chip" />
      <img className="card-vendor-icon" src={vendorIcon(cardData.vendor)} alt={`${cardData.vendor} Icon`} />
      <div className="card-number">
        {cardData.number}
      </div>
      <div className="card-holder-expiry">
        <div className="card-holder-section">
          <span className="card-info-label">CARDHOLDER NAME</span>
          <span className="card-holder">{cardData.holder}</span>
        </div>
        <div className="card-expiry-section">
          <span className="card-info-label">VALID THRU</span>
          <span className="card-expiry">{cardData.expiry}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
