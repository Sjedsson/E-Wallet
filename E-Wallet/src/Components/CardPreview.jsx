import React from 'react';
import BitcoinIcon from '../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../assets/vendor-blockchain.svg';
import EvilIcon from '../assets/vendor-evil.svg';
import NinjaIcon from '../assets/vendor-ninja.svg';
import ChipDark from '../assets/chip-dark.svg';
import ChipLight from '../assets/chip-light.svg';

const CardPreview = ({ cardDetails }) => {
  // Function to get the corresponding SVG based on the vendor
  const getVendorIcon = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return BitcoinIcon;
      case 'block-chain-inc': // Corrected the vendor name
        return BlockchainIcon;
      case 'evil-corp':
        return EvilIcon;
      case 'ninja-bank':
        return NinjaIcon;
      default:
        return null; // Return null or a default icon if the vendor doesn't match
    }
  };

  // Function to get the corresponding chip based on the vendor
  const getVendorChip = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return ChipDark;
      case 'block-chain-inc': // Corrected the vendor name
      case 'evil-corp':
      case 'ninja-bank':
        return ChipLight;
      default:
        return null; // Return null or a default chip if the vendor doesn't match
    }
  };

  return (
    <div className="card-preview">
      <div className="card">
        {cardDetails.vendor && <img src={getVendorIcon(cardDetails.vendor)} alt="Vendor Icon" />}
        {cardDetails.vendor && <img src={getVendorChip(cardDetails.vendor)} alt="Vendor Chip" />}
        <div className="card-body">
          <div className="card-number">{cardDetails.number || 'XXXX XXXX XXXX XXXX'}</div>
          <div className="card-holder">{cardDetails.holder || 'CARDHOLDER NAME'}</div>
          <div className="card-expiry">{cardDetails.expiry || 'MM/YY'}</div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
