import React from 'react';

// Update the component to accept cardDetails as a prop
const CardPreview = ({ cardDetails }) => {
  return (
    <div className="card-preview">
      {/* Use the cardDetails prop to display the information */}
      <div className="card-number">{cardDetails.number || 'XXXX XXXX XXXX XXXX'}</div>
      <div className="card-holder">{cardDetails.holder || 'CARDHOLDER NAME'}</div>
      <div className="card-expiry">{cardDetails.expiry || 'MM/YY'}</div>
      {/* You can add vendor-specific styling or icons here based on cardDetails.vendor */}
    </div>
  );
};

export default CardPreview;
