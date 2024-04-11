import React from 'react';
import { useSelector } from 'react-redux';

const CardPreview = () => {
  // Using Redux to get the card details from the state
  const cardDetails = useSelector((state) => state.card.currentCardDetails) || {};

  return (
    <div className="card-preview">
      {/* Optional chaining to safely access properties */}
      <div className="card-number">{cardDetails.number}</div>
      <div className="card-holder">{cardDetails.holder}</div>
      <div className="card-expiry">{cardDetails.expiry}</div>
      {/* Add any other details you want to preview */}
    </div>
  );
};

export default CardPreview;
