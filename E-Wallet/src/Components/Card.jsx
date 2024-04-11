import React from 'react';

const Card = ({ cardData }) => {
  return (
    <div className="card">
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
