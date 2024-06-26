// Card.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCard } from '../Redux/CardSlice'; // Ensure this path is correct
import BitcoinIcon from '../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../assets/vendor-blockchain.svg';
import EvilIcon from '../assets/vendor-evil.svg';
import NinjaIcon from '../assets/vendor-ninja.svg';
import ChipDark from '../assets/chip-dark.svg';
import ChipLight from '../assets/chip-light.svg';
import './card-styles.css'; // Import styles
import '@fortawesome/fontawesome-free/css/all.css';


const getVendorClass = (vendor) => {
  return `card card-preview color-${vendor.replace(/\s+/g, '-').toLowerCase()}`;
};

const Card = ({ cardData, active }) => {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(removeCard(cardData.id));
  };

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
        return '';
    }
  };

  const vendorChip = (vendor) => {
    return vendor === 'bitcoin-inc' ? ChipDark : ChipLight;
  };

  const cardClass = getVendorClass(cardData.vendor) + (active ? ' active' : '');

  return (
    <div className={cardClass}>
      <img className="card-chip" src={vendorChip(cardData.vendor)} alt="Chip" />
      <img className="card-vendor-icon" src={vendorIcon(cardData.vendor)} alt={`${cardData.vendor} Icon`} />
      <div className="card-number">{cardData.number}</div>
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
      {active && (
        <button className="card-remove-btn" onClick={handleRemove}>
  <i className="fas fa-trash-alt"></i>
</button>

      )}
    </div>
  );
};

export default Card;
